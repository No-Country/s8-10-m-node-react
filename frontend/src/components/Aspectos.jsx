import { useState , useEffect} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "./Button";
import InputField from "./InputField";
import { ProfileImage } from "./ProfileImage";
import { Link ,useLocation} from "react-router-dom";

export const Aspectos = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [validateForm, setValidateForm] = useState({});
  const [isLocation, setIsLocation] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/user/aspectos') {
      setIsLocation('aspectos')
    } else if (location.pathname === '/user/perfil') {
      setIsLocation('perfil')
    }
  }, [location.pathname, isLocation])

  const handleChange = (e) => {
    setValidateForm({
      ...validateForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateUser = async (e) => {
    e.preventDefault();
   
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-20">
      <section className="mt-10 flex">
        <ProfileImage name="Marcos Leiva" />
      </section>
      <section className="w-full flex justify-center gap-[5.25rem] relative pl-4">
        <Link className="" replace="user/aspecto">
         USUARIO
        </Link>
        <Link className="pr-4" to="../perfil">
         ASPECTOS
        </Link>
        <div
          className={`w-4/5 border-b-2 border-white absolute bottom-[-2px] bg-white`}
        >
          <span
            className={`border-b-2 border-black ${
              isLocation === 'perfil'
                ? 'w-[45%] transform translate-x-[0%] transition-all duration-300'
                : 'w-[45%] transform translate-x-[100%] transition-all duration-300'
            } absolute bottom-[-2px]`}
          ></span>
        </div>
      </section>
      <section className="w-full px-8">
        <form className="w-full flex flex-col gap-6" onSubmit={validateUser}>
          <InputField
            id="dni"
            type="number"
            name="indentificacion"
            placeholder="121423131"
            labelFor="indentificacion"
            content="indentificacion"
            func={handleChange}
          />
          <InputField
            id="pais"
            type="text"
            name="pais"
            placeholder="argentina"
            labelFor="pais"
            content="pais"
            func={handleChange}
          />
          <InputField
            id="direccion"
            type="text"
            name="direccion"
            placeholder="av. 123"
            labelFor="direccion"
            content="direccion"
            func={handleChange}
          />
          <InputField
            id="telefono"
            type="number"
            name="telefono"
            placeholder="123456789"
            labelFor="telefono"
            content="telefono"
            func={handleChange}
          />

          <div className="flex flex-col gap-6">
            <Button
              type="submit"
              nameClass="bg-customColor mt-8 py-3 rounded-full text-white font-semibold tracking-wide"
            >
              Guardar Cambios
            </Button>
            <Button
              type="submit"
              nameClass="border-2 border-red-500 mt-2 py-3 rounded-full text-red-500 font-semibold tracking-wide"
            >
              Guardar Cambios
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};
