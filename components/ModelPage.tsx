import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CAR_MODELS } from '../constants';
import { CarModel } from '../types';
import VehiclePage from './VehiclePage';

const ModelPage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();

  // Buscar el modelo por ID
  const model = CAR_MODELS.find(m => m.id === modelId);

  // Si no se encuentra el modelo, redirigir a la página principal
  if (!model) {
    navigate('/');
    return null;
  }

  const handleBack = () => {
    navigate('/');
  };

  return <VehiclePage vehicle={model} onBack={handleBack} />;
};

export default ModelPage;
