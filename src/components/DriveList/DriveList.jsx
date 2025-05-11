import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

import {
  fetchDriveStatus,
  onVaccinate,
  resetFetchDriveStatusMessage,
  resetVaccinateStatusMessage
} from './../../redux/drives/actions';

import './DriveList.scss';

const DriveList = ({ triggerEditMode }) => {
  const dispatch = useDispatch();
  const driveStatus = useSelector(state => state.drives.driveStatus);
  const vaccinate = useSelector(state => state.drives.vaccinate);
  const { id } = useSelector(state => state.drives.createDrive);
  const { eligibleDrives, inEligibleDrives, loading, error } = driveStatus;
  const { loading: vaccinateLoading, error: errLoading } = vaccinate;
  const [expandedDrive, setExpandedDrive] = useState(null);

  useEffect(() => {
    dispatch(fetchDriveStatus());
  }, [ dispatch, id ]);

  const toggleExpand = (driveId) => {
    setExpandedDrive(expandedDrive === driveId ? null : driveId);
  };

  const renderTable = (driveList, expired = false) => {
    return (
      <div className='table-container'>
        {error && <Alert type='error' message={error} closeFn={() => dispatch(resetFetchDriveStatusMessage())} /> }
        {errLoading && <Alert type='error' message={errLoading} closeFn={() => dispatch(resetVaccinateStatusMessage())} /> }
        <div className='scrollable-table'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Vaccine</th>
                <th>Date</th>
                <th>Doses</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {driveList.map((drive, index) => {
                return (
                  <React.Fragment key={index+drive.name}>
                    <tr key={drive.name} onClick={() => toggleExpand(drive._id)}>
                      <td>{drive.name}</td>
                      <td>{drive.applicableClasses}</td>
                      <td>{drive.vaccineDetails.name}</td>
                      <td>{new Date(drive.date).toLocaleDateString()}</td>
                      <td>{drive.numDoses}</td>
                      <td>
                        {!expired && <Link onClick={() => triggerEditMode(drive._id)}>Edit</Link>}
                        <Link onClick={() => toggleExpand(drive._id)}>{drive._id === expandedDrive ? 'Collapse' : 'Expand'}</Link>
                      </td>
                    </tr>
                    {expandedDrive === drive._id && (
                      <tr>
                        <td colSpan="6">
                          <h4>Eligible Students</h4>
                          <table>
                            <thead>
                              <tr>
                                <th>Student Name</th>
                                <th>Registration No</th>
                                <th>Class</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            {!vaccinateLoading ? (
                              <tbody>
                                {drive.eligibleStudents.length > 0 ? (
                                  drive.eligibleStudents.map((student) => (
                                    <tr key={student._id} className='student'>
                                      <td>{student.name}</td>
                                      <td>{student.regNo}</td>
                                      <td>{student.standard}</td>
                                      {!expired && (<td>{student.vaccinations.find(e => e.vaccineId === drive.vaccine) ? 'Vaccinated' : (
                                        <Link className='status' onClick={() => dispatch(onVaccinate({ studentId: student._id, driveId: drive._id }))}>Mark as Vaccinated</Link>
                                      )}</td>)}
                                      {expired && (<td>{student.vaccinations.find(e => e.vaccineId === drive.vaccine) ? 'Vaccinated' : 'Not Vaccinated' }</td>)}
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="4">No eligible students</td>
                                  </tr>
                                )}
                              </tbody>
                            ) : 'Loading....'}
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };


  return (
    <div className='drive-list'>
      <h3>Active Drives</h3>
      {loading ? <Spinner /> : (
        <>
          {renderTable(eligibleDrives)}
          {inEligibleDrives.length > 0 && (
            <>
              <h3 className='expired'> Expired Drives </h3>
              {renderTable(inEligibleDrives, true)}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DriveList;
