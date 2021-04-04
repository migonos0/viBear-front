import { MainMenu } from "../../../components/MainMenu";
import { Tabs } from "../../../components/productsInventory/Tabs";
import { Body } from "../../../components/productsInventory/productTypes/createProductType/Body";
export const CreateProductType = () => {
  return (
    <>
      <div className="p-grid p-d-flex p-ai-center">
        <div className="p-col-2">
          <MainMenu
            moduleName="Inventario de productos"
            iconName="pi-th-large"
          ></MainMenu>
        </div>
        <div className="p-col-10 ">
          <Tabs siteName="Creación de tipo de producto"></Tabs>
        </div>
      </div>
      <div className="p-grid">
        <div className="p-col p-d-inline">
          <Body></Body>
        </div>
      </div>
    </>
  );
};
