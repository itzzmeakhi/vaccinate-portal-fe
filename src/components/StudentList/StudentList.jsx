import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

import {
  fetchStudents,
  resetFetchStudentsMessage
} from './../../redux/student/actions';
import {
  fetchVaccines
} from './../../redux/vaccine/actions';

import './StudentList.scss';



const StudentList = () => {
  const [searchParams, setSearchParams] = useState({ 
    name: '',
    standard: '',
    regNo: '',
    vaccine: '',
    vaccinated: '' 
  });

  const dispatch = useDispatch();
  const { studentList, loading, error } = useSelector(state => state.student);
  const vaccines = useSelector(state => state.vaccine.vaccines);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentList.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(studentList.length / studentsPerPage);

  useEffect(() => {
    dispatch(fetchStudents({}));
    dispatch(fetchVaccines());
  }, [ dispatch ]);

  const handleSearchFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'standard') {
      setSearchParams({ ...searchParams, [name]: value.replaceAll(' ', '') });
    } else {
      setSearchParams({ ...searchParams, [name]: value });
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterSearch = () => {
    dispatch(fetchStudents(searchParams));
  };


  const handleDownloadCSV = () => {
    const ws = XLSX.utils.json_to_sheet(studentList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "Student_List.csv");
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(studentList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "Student_List.xlsx");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'A4'
    });
    
    doc.setFontSize(12);
    doc.text("Student List", 40, 40);
  
    const tableData = studentList.map(student => [
      student.name,
      student.standard,
      student.regNo,
      student.vaccinations.length > 0 ? 'Yes' : 'No',
      student.vaccinations.length > 0 ? student.vaccinations[0].vaccineName : '-',
      student.vaccinations.length > 0 ? new Date(student.vaccinations[0].date).toLocaleDateString() : '-'
    ]);
  
    autoTable(doc, {
      startY: 60,
      head: [['Name', 'Class', 'Reg No', 'Vaccinated', 'Vaccine', 'Date']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [3, 167, 145]
      },
      bodyStyles: {
        textColor: [0, 0, 0]
      }
    });
  
    doc.save('Student_List.pdf');
  };
  

  return (
    <div className='student-list'>
      {loading ? <Spinner /> : (
        <>
          <h3>View/Search Students</h3>
          <div className='filters'>
            <div className='filter-item'>
              <input 
                placeholder='Name' 
                name='name' 
                onChange={handleSearchFilterChange} 
              />
            </div>
            <div className='filter-item'>
              <input 
                placeholder='Standard (Comma seperated)'
                name='standard' 
                onChange={handleSearchFilterChange} 
              />
            </div>
            <div className='filter-item'>
              <input 
                placeholder='Registration No'
                name='regNo'
                onChange={handleSearchFilterChange} 
              />
            </div>
            <div className='filter-item'>
              <select name='vaccine' onChange={handleSearchFilterChange}>
                <option value=''>Vaccine</option>
                {vaccines.map(vac => (
                  <option value={vac._id} key={vac._id}>{vac.name}</option>
                ))}
              </select>
            </div>
            <div className='filter-item'>
              <select name='vaccinated' onChange={handleSearchFilterChange}>
              <option value=''>Status</option>
                <option value='true'>Vaccinated</option>
                <option value='false'>Not Vaccinated</option>
              </select>
            </div>
            <div className='filter-item'>
              <Button onClick={() => handleFilterSearch()}>Search</Button>
            </div>
          </div>

          <div className='download-buttons'>
            <Button variant='white-bg' onClick={handleDownloadCSV}>Download CSV</Button>
            <Button variant='white-bg' onClick={handleDownloadExcel}>Download Excel</Button>
            <Button variant='white-bg' onClick={handleDownloadPDF}>Download PDF</Button>
          </div>

          {error && <Alert type='error' message={error} closeFn={() => dispatch(resetFetchStudentsMessage())} /> }

          <div className='table-container'>
            <div className='scrollable-table'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Reg No</th>
                    <th>Vaccination Status</th>
                    <th>Vaccine Name</th>
                    <th>Date of Vaccination</th>
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map(student => (
                    <tr key={student.regNo}>
                      <td>{student.name}</td>
                      <td>{student.standard}</td>
                      <td>{student.regNo}</td>
                      <td>{student.vaccinations.length > 0 ? 'Yes' : 'No'}</td>
                      <td>{student.vaccinations.length > 0 ? student.vaccinations[0].vaccineName : '-'}</td>
                      <td>{student.vaccinations.length > 0 ? new Date(student.vaccinations[0].date).toLocaleDateString() : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='pagination'>
            {totalPages > 1 && Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => changePage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentList;
