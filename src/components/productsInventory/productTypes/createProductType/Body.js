import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Button } from 'primereact/button';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIvaPercentages } from "../../../../redux/actions/productsInventory/ivaPercentages";

export const Body = () => {
  const dispatch = useDispatch();
  const { ivaPercentages } = useSelector((state) => state.ivaPercentages);
  const [name, setName] = useState("");
  const [isExpirable, setIsExpirable] = useState(true);
  const [selectedIvaPercentage, setSelectedIvaPercentage] = useState(null);

  useEffect(() => {
    dispatch(getIvaPercentages());
  }, [dispatch]);

  const onIvaPercentageChange = (e) => {
    setSelectedIvaPercentage(e.value);
  };

  const hadleSubmitCreateProductType = () => {
    console.log("Submit");
  }

  return (
    <>
      <Card subTitle="Instrucciones">
        Bienvenido/a, por favor rellene todos los campos para poder continuar.
      </Card>
      <Card className="p-mt-2">
        <div className="p-field">
          <label className="p-d-block">Nombre</label>
          <InputText
            className="p-d-block"
            value={name}
            onChange={(e) => setName(e.target.value)} required={true}
          />
          <small className="p-d-block">
            Nombre del tipo de producto. Ejemplo: enlatados.
          </small>
        </div>

        <div className="p-field">
          <label htmlFor="productTypeIsExpirable" className="p-d-block">
            Es expirable
          </label>
          <Checkbox
            inputId="productTypeIsExpirable"
            checked={isExpirable}
            onChange={(e) => setIsExpirable(e.checked)}
          />
          <small id="productTypeIsExpirable-help" className="p-d-block">
            Perecibilidad del producto.
          </small>
        </div>

        <div className="p-field">
          <label htmlFor="productTypeIva" className="p-d-block">
            Porcentaje de IVA aplicado
          </label>
          {ivaPercentages === null ? (
            <h1>Loading...</h1>
          ) : (
            <Dropdown
              value={selectedIvaPercentage}
              options={ivaPercentages}
              onChange={onIvaPercentageChange}
              optionLabel="value"
              placeholder="Seleccione un porcentaje de iva."
            />
          )}
          <small id="productTypeIva-help" className="p-d-block">
            Iva que aplica al tipo de producto.
          </small>
        </div>

        <Button label="Crear" onClick={hadleSubmitCreateProductType}/>
      </Card>
    </>
  );
};
