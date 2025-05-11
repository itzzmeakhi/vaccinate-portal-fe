import React, { useState } from 'react';

import Template from '../Template/Template';
import DriveForm from './../../components/DriveForm/DriveForm';
import VaccineForm from '../../components/VaccineForm/VaccineForm';
import DriveList from '../../components/DriveList/DriveList';

import './StatusPage.scss';

const StatusPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [driveId, setDriveId] = useState('');

  const triggerEditMode = (driveId) => {
    setEditMode(true);
    setDriveId(driveId);
  };

  const exitEditMode = () => {
    setEditMode(false);
    setDriveId('');
  }

  return (
    <Template>
      <div className="status-page">
        <DriveForm />
        <VaccineForm />
        {!editMode && (
          <DriveList triggerEditMode={triggerEditMode} />
        )}
        {editMode && (
          <DriveForm editMode={editMode} driveId={driveId} exitEditMode={exitEditMode} />
        )}
      </div>
    </Template>
  );
};

export default StatusPage;