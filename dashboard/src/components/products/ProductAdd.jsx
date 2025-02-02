import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";

export const ProductAdd = () => {

  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    UseFetch('/categories')
      .then(({ok, data}) => {
        const {categories} = data;
        ok &&
        setCategories(categories)
      })
      UseFetch('/colors')
      .then(({ok, data}) => {
        const {colors} = data;
        ok &&
        setColors(colors)
      })
  }, []);

  return (
    <>
      <div className='d-flex justify-content-between'>

        <h4>Agregar Producto </h4>
      </div>
      <hr />
      <form className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">
            Titulo *
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="chef" className="form-label">
           colores *
          </label>
          <select
            className="form-control"
            name="chef"

          >
            <option hidden defaultValue value="">Seleccione...</option>
            {
              colors.map((color, index) => (
                <option value={color.id} key={index}>{color.name}</option>
              ))
            }
          </select>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="category" className="form-label">
            Categoría *
          </label>
          <select
            className="form-control"
            name="category"

          >
            <option hidden defaultValue value="">Seleccione...</option>
            {
              categories.map((category, index) => (
                <option value={category.id} key={index}>{category.category}</option>
              ))
            }
          </select>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="price" className="form-label">
            Precio *
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="discount" className="form-label">
            Descuento
          </label>
          <input
            type="number"
            className="form-control"
            name="discount"
            defaultValue={0}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="description" className="form-label">
            Descripción *
          </label>
          <textarea
            className="form-control"
            name="description"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-around">
            <div className="form-check form-switch">
              <input className="form-check-input" name="free" type="checkbox" role="switch"
                id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Gratuito</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" name="visible" type="checkbox" role="switch"
                id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Visible</label>
            </div>
          </div>

        </div>
        <div className="col-12 mb-3">

          <input
            className="form-control"
            type="file"
            name="image"
            id="image"
            hidden
          />
          <div className="d-flex align-items-center justify-content-around">
            <label className="btn btn-success my-1" htmlFor="image" >
              Cargar imagenes *
            </label>
            <button className="btn btn-dark my-1 " type="reset" >
              Limpiar
            </button>
            <button className="btn btn-primary my-1" type="submit" disabled>
              Guardar
            </button>

          </div>

        </div>

        <div className="col-12">

        </div>

      </form>
    </>
  );
};
