import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "./Button";
import InputField from "./InputField";
import { ProfileImage } from "./ProfileImage";
import { Link, useLocation } from "react-router-dom";

export const RecargaBilletera= () => {
  const [showPassword, setShowPassword] = useState(false);
  const [validateForm, setValidateForm] = useState({});
  const [isLocation, setIsLocation] = useState("");
  const [showuser, setShowUser] = useState(false);
  const [cheked, setCheked] = useState(false);

  const handleClick = () => {
    setShowUser(!showuser);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/user/perfil") {
      setIsLocation("perfil");
    } else if (location.pathname === "/user/aspectos") {
      setIsLocation("aspectos");
    }
  }, [location.pathname]);

  useEffect(() => {
    function checkScreenSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        // Pantalla grande
        console.log("Estás en una pantalla grande");
        setCheked(true);
      } else {
        // Dispositivo móvil
        console.log("Estás en un dispositivo móvil");
        setCheked(false);
      }
    }

    checkScreenSize();

    // Agregar y eliminar el event listener al montar y desmontar el componente
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
   
      
     
        
        <section className="w-full flex px-8 flex-col items-center sm:flex-col sm:justify-center">
         
          <form className="w-full flex pt-16 gap-6 flex-col items-center sm:flex-col sm:justify-center" onSubmit={validateUser}>
           
            <InputField
              id="namephone"
              type="Number"
              name="Telefono"
              placeholder="Numero de telefono"
              labelFor="Numero de telefono"
              content="Numero de telefono"
              func={handleChange}
            />
            <InputField
              id="namephone"
              type="Number"
              name="Telefono"
              placeholder="Confirmar Numero de telefono"
              labelFor="Numero de telefono"
              func={handleChange}
            />
            <InputField
              id="monto"
              type="number"
              name="monto"
              placeholder="$0"
              labelFor="Monto"
              content="Monto"
              func={handleChange}
            />
           
        

            <div className="flex w-2/4 flex-col gap-4">
              <Button
                type="submit"
                nameClass="bg-customColor  mt-8 py-3 rounded-full text-white font-semibold tracking-wide"
              >
                Guardar Cambios
              </Button>
              <Button
                type="submit"
                nameClass="border-2 border-red-500 mt-2 py-3 rounded-full text-red-500 font-semibold tracking-wide"
              >
                Eliminar Cuenta
              </Button>
            </div>
          </form>
        </section>
    
        
    </main>
  );
};

