import "./styles/Form.css";

//componente formulario

//Define un componente funcional Form que acepta toggleForm como props 
//para manejar la apertura y cierre del formulario.
const Form = ({ toggleForm }) => {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-light z-10000 w-3/4 max-w-lg p-5 rounded-lg shadow-lg ">
      <article className="flex flex-col gap-2 cta-form-content">
        <div className="cta-form-text">
          <h2 className="text-2xl font-bold text-primary">
            Pedir Presupuesto y te contestamos en el momento
          </h2>
        </div>

        <form
          id="cta-form"
          className="grid grid-cols-2 gap-2 cta-input-wrapper "
        >
          <div className="flex flex-col">
            <label
              htmlFor="cta_name"
              className="text-lg font-bold text-primary"
            >
              Nombre<span className="text-red-500">*</span>
            </label>
            <input
              id="cta_name"
              className="bg-primary text-neutral-light p-2 rounded-lg"
              type="text"
              name="cta-name"
              required
              placeholder="Introduce tu nombre..."
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cta_email"
              className="text-lg font-bold text-primary"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="cta_email"
              className="bg-primary text-neutral-light p-2 rounded-lg"
              type="email"
              name="cta-email"
              required
              placeholder="Introduce tu email..."
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cta_telefono"
              className="text-lg font-bold text-primary"
            >
              Telefono<span className="text-red-500">*</span>
            </label>
            <input
              id="cta_telefono"
              className="bg-primary text-neutral-light p-2 rounded-lg"
              type="number"
              name="cta-telf"
              required
              placeholder="Introduce tu telefono..."
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cta-subscription"
              className="text-lg font-bold text-primary"
            >
              Para que Tipo de consulta
              <span className="text-red-500">*</span>
            </label>
            <select
              id="cta-subscription"
              className="bg-primary text-neutral-light p-2 rounded-lg"
              name="cta-subscription--type"
              required
            >
              <option value="" disabled defaultValue>
                Selecciona una categoria
              </option>
              <option value="abogados">Abogados</option>
              <option value="gestorias">Gestorias</option>
              <option value="asesores">Asesores</option>
            </select>
          </div>

          <div className="col-span-2 flex flex-col">
            <label
              htmlFor="cta-mensaje"
              className="text-lg font-bold text-primary"
            >
              Mensaje<span className="text-red-500">*</span>
            </label>
            <textarea
              id="cta-mensaje"
              className="bg-primary text-neutral-light p-2 rounded-lg h-20"
              name="cta-mensaje"
              required
              placeholder="Pedir un presupuesto para una página web es el inicio de todo negocio online"
            ></textarea>
          </div>

          <div className="col-span-2 cta-buttons flex flex-col gap-2">
            <input
              className="cta-submit bg-accent text-neutral-light p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              type="submit"
              value="Enviar"
            />
            <input
              className="bg-primary text-neutral-light p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              type="reset"
              value="Cancelar"
              onClick={toggleForm}
            />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Form;
