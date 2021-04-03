import { Menubar } from "primereact/menubar";
import { useHistory } from "react-router-dom";

export const Tabs = () => {
  const history = useHistory();

  const handleCreateProductType = () => {
    history.push("/productsInventory/productTypes/create");
  };

  const items = [
    {
      label: "Productos",
      icon: "pi pi-fw pi-list",
      items: [
        {
          label: "Crear nuevo producto",
          icon: "pi pi-fw pi-plus",
          command: handleCreateProductType
        },
        {
          label: "Administrar productos",
          icon: "pi pi-fw pi-eye",
        },
      ],
    },
    {
      label: "Definiciones de productos",
      icon: "pi pi-fw pi-align-center",
      items: [
        {
          label: "Crear nueva definición de producto",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Administrar definiciones de productos",
          icon: "pi pi-fw pi-eye",
        },
      ],
    },
    {
      label: "Tipos de productos",
      icon: "pi pi-fw pi-book",
      items: [
        { label: "Crear nuevo tipo de producto", icon: "pi pi-fw pi-plus" },
        { label: "Administrar tipos de productos", icon: "pi pi-fw pi-eye" },
      ],
    },
  ];

  return (
    <div>
      <div className="card ">
        <Menubar
          start="Inventario de productos"
          model={items}
          className="p-d-flex p-jc-between p-mt-1"
        />
      </div>
    </div>
  );
};
