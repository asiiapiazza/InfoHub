import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  GraduationCapIcon,
  CalendarDotsIcon,
  DesktopIcon,
  GearIcon,
} from "@phosphor-icons/react";

interface Course {
  name: string;
  link: string;
  active: boolean;
  anno: number;
}

const getToday = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // i mesi partono da 0
  const yyyy = today.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

const corsi: Course[] = [
  {
    name: "Architetture Dati",
    link: "https://elearning.unimib.it/enrol/index.php?id=62112",
    active: false,
    anno: 1,
  },
  {
    name: "Bioinformatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62121",
    active: false,
    anno: 1,
  },
  {
    name: "Fondamenti Logico Matematici dell'Informatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62131",
    active: false,
    anno: 1,
  },
  {
    name: "Informatica Industriale",
    link: "https://elearning.unimib.it/enrol/index.php?id=62124",
    active: false,
    anno: 1,
  },
  {
    name: "Machine Learning",
    link: "https://elearning.unimib.it/course/view.php?id=62127",
    active: false,
    anno: 1,
  },
  {
    name: "Modelli della Concorrenza",
    link: "https://elearning.unimib.it/course/view.php?id=62133",
    active: false,
    anno: 1,
  },
  {
    name: "Teoria della Computazione",
    link: "https://elearning.unimib.it/enrol/index.php?id=62134",
    active: false,
    anno: 1,
  },
  {
    name: "Diritto dell'Informazione, della Comunicazione e dell'Informatica",
    link: "https://elearning.unimib.it/enrol/index.php?id=62283",
    active: false,
    anno: 1,
  },
  {
    name: "Green Computing",
    link: "https://elearning.unimib.it/enrol/index.php?id=61954",
    active: false,
    anno: 1,
  },
  {
    name: "Metodi del Calcolo Scientifico",
    link: "https://elearning.unimib.it/enrol/index.php?id=62129",
    active: false,
    anno: 1,
  },
  {
    name: "Modelli Probabilistici per le Decisioni",
    link: "https://elearning.unimib.it/enrol/index.php?id=62122",
    active: false,
    anno: 1,
  },
  {
    name: "Processo e Sviluppo del Software",
    link: "https://elearning.unimib.it/enrol/index.php?id=62115",
    active: false,
    anno: 1,
  },
  {
    name: "Juridical and Social Issues in Information Society",
    link: "https://elearning.unimib.it/enrol/index.php?id=61967",
    active: false,
    anno: 1,
  },
  {
    name: "Qualità del Software",
    link: "https://elearning.unimib.it/enrol/index.php?id=62123",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Complessi e Incerti",
    link: "https://elearning.unimib.it/enrol/index.php?id=62113",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Complessi: Modelli e Simulazione",
    link: "https://elearning.unimib.it/enrol/index.php?id=62114",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi e Servizi di Telecomunicazione",
    link: "https://elearning.unimib.it/enrol/index.php?id=62116",
    active: false,
    anno: 1,
  },
  {
    name: "Sistemi Informativi",
    link: "https://elearning.unimib.it/enrol/index.php?id=62125",
    active: false,
    anno: 1,
  },
  {
    name: "Teoria dell'Informazione e Crittografia",
    link: "https://elearning.unimib.it/enrol/index.php?id=62130",
    active: false,
    anno: 1,
  },
  {
    name: "Advanced Machine Learning",
    link: "https://elearning.unimib.it/course/view.php?id=61031",
    active: false,
    anno: 2,
  },
  {
    name: "Applicazioni Web: progettazione e Sviluppo",
    link: "https://elearning.unimib.it/course/view.php?id=61034",
    active: false,
    anno: 2,
  },
  {
    name: "Architettura del Software",
    link: "https://elearning.unimib.it/course/view.php?id=61026",
    active: false,
    anno: 2,
  },
  {
    name: "Artificial Intelligence",
    link: "https://elearning.unimib.it/course/view.php?id=61030",
    active: false,
    anno: 2,
  },
  {
    name: "Causal Networks",
    link: "https://elearning.unimib.it/course/view.php?id=61037",
    anno: 2,
    active: false,
  },
  {
    name: "Cloud Computing",
    link: "https://elearning.unimib.it/course/view.php?id=61036",
    anno: 2,
    active: false,
  },
  {
    name: "Computer and Robot Vision",
    link: "https://elearning.unimib.it/course/view.php?id=61032",
    anno: 2,
    active: false,
  },
  {
    name: "Data Analytics",
    link: "https://elearning.unimib.it/course/view.php?id=61041",
    anno: 2,
    active: false,
  },
  {
    name: "Data and Computational Biology",
    link: "https://elearning.unimib.it/course/view.php?id=61042",
    anno: 2,
    active: false,
  },
  {
    name: "Evolution of Software Systems and Reverse Engineering",
    link: "https://elearning.unimib.it/course/view.php?id=61043",
    anno: 2,
    active: false,
  },
  {
    name: "Foundations of Game Design",
    link: "https://elearning.unimib.it/course/view.php?id=61038",
    anno: 2,
    active: false,
  },
  {
    name: "Gestione della Conoscenza",
    link: "https://elearning.unimib.it/course/view.php?id=61028",
    anno: 2,
    active: false,
  },
  {
    name: "Information Retrieval",
    link: "https://elearning.unimib.it/course/view.php?id=61033",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio di Interaction Design",
    link: "https://elearning.unimib.it/course/view.php?id=61040",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio di Progettazione",
    link: "https://elearning.unimib.it/course/view.php?id=61035",
    anno: 2,
    active: false,
  },
  {
    name: "Laboratorio Internet of Things",
    link: "https://elearning.unimib.it/course/view.php?id=61027",
    active: false,
    anno: 2,
  },
  {
    name: "Large Scale Data Management",
    link: "https://elearning.unimib.it/course/view.php?id=61046",
    active: false,
    anno: 2,
  },
  {
    name: "Large-Scale Graph Algorithms",
    link: "https://elearning.unimib.it/course/view.php?id=61045",
    active: false,
    anno: 2,
  },
  {
    name: "Self-Adaptive Systems",
    link: "https://elearning.unimib.it/course/view.php?id=61025",
    active: false,
    anno: 2,
  },
  {
    name: "Sicurezza Informatica",
    link: "https://elearning.unimib.it/course/view.php?id=61039",
    active: false,
    anno: 2,
  },
  {
    name: "Sistemi di Calcolo Parallelo",
    link: "https://elearning.unimib.it/course/view.php?id=61044",
    active: false,
    anno: 2,
  },
  {
    name: "Unconventional and Quantum Computing",
    link: "https://elearning.unimib.it/course/view.php?id=61047",
    active: false,
    anno: 2,
  },
  {
    name: "Virtual and Augmented Reality",
    link: "https://elearning.unimib.it/course/view.php?id=61048",
    active: false,
    anno: 2,
  },
  {
    name: "Visual Information Processing and Management",
    link: "https://elearning.unimib.it/course/view.php?id=61029",
    active: false,
    anno: 2,
  },
]; //.sort((a, b) => a.name.localeCompare(b.name)); // ordina alfabeticamente

export default function App() {
  const [corsiFirst, setCourses] = useState<Course[]>(corsi);
  const [showMenu, setShowMenu] = useState(false);
  const [tempCourses, setTempCourses] = useState<Course[]>(corsi);

  const toggleTempCourse = (courseName: string) => {
    setTempCourses((prev) =>
      prev.map((c) => (c.name === courseName ? { ...c, active: !c.active } : c))
    );
  };

  const [query, setQuery] = useState("");

  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />;

  // Salva le modifiche e chiudi il menu
  const saveCourses = () => {
    setCourses(tempCourses);
    setShowMenu(false);
  };

  const url = `https://gestioneorari.didattica.unimib.it/PortaleStudentiUnimib/index.php?view=easycourse&form-type=corso&include=corso&txtcurr=1+-+PERCORSO+COMUNE&anno=2025&scuola=AreaScientifica-Informatica&corso=F1802Q&anno2[]=GGG|1&date=${getToday()}&_lang=it&list=&week_grid_type=-1&ar_codes_=&ar_select_=&col_cells=0&empty_box=0&only_grid=0&highlighted_date=0&all_events=0&faculty_group=0#`;

  return (
    <div className="m-8 grid grid-cols-13 gap-10">
      {/* titolo */}
      <div className="col-span-13 text-black font-bold text-6xl text-center">
        InfoLink
      </div>

      {/* lista di bottoni secondari dei corsi attivi */}
      <div className="col-span-7 flex col-start-4 flex-wrap justify-center gap-4 mt-3 mx-auto">
        {corsiFirst
          .filter((course) => course.active)
          .map((course) => (
            <button
              key={course.name}
              onClick={() =>
                window.open(course.link, "_blank", "noopener,noreferrer")
              }
              className="px-6 py-3 bg-blue-500 text-white rounded 
                   hover:bg-blue-500 hover:scale-105 transform
                   transition duration-150 ease-in-out cursor-pointer"
            >
              {course.name}
            </button>
          ))}
      </div>

      {/* bottoni principali */}
      <div className="flex flex-wrap col-span-13 justify-center gap-10">
        <a
          className="hover:scale-105 transform
                   transition duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
          href="https://s3w.si.unimib.it/auth/studente/HomePageStudente.do"
        >
          <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
            <div className="mb-2">
              <GraduationCapIcon size={32} color="green" />
            </div>
            <div className="text-center font-semibold">Segreteria Online</div>
          </div>
        </a>

        <a
          target="_blank"
          className="hover:scale-105 transform transition duration-150 ease-in-out"
          rel="noopener noreferrer"
          href={url} // URL dinamico con data aggiornata
        >
          <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
            <div className="mb-2">
              <CalendarDotsIcon size={32} color="blue" />
            </div>
            <div className="text-center font-semibold">Calendario Lezioni</div>
          </div>
        </a>

        <a
          target="_blank"
          className="hover:scale-105 transform
                   transition duration-150 ease-in-out"
          rel="noopener noreferrer"
          href="https://gestioneorari.didattica.unimib.it/PortaleStudentiUnimib/index.php?view=easytest&form-type=et_cdl&include=et_cdl&et_er=1&scuola=AreaScientifica-Informatica&esami_cdl=F1801Q&anno2%5B%5D=1&datefrom=23-09-2025&dateto=11-04-2026&_lang=it&list=&week_grid_type=-1&ar_codes_=&ar_select_=&col_cells=0&empty_box=0&only_grid=0&highlighted_date=0&all_events=0#"
        >
          <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
            <div className="mb-2">
              <CalendarDotsIcon size={32} color="red" />
            </div>
            <div className="text-center font-semibold">Calendario Esami</div>
          </div>
        </a>

        <a
          target="_blank"
          className="hover:scale-105 transform
                   transition duration-150 ease-in-out"
          rel="noopener noreferrer"
          href="https://esamionline.elearning.unimib.it/my/"
        >
          <div className="col-span-2 bg-gray-200 rounded-lg p-4 flex flex-col items-center hover:bg-gray-300 cursor-pointer">
            <div className="mb-2">
              <DesktopIcon size={32} color="purple" />
            </div>
            <div className="text-center font-semibold">Esami Online</div>
          </div>
        </a>

        <div
          className="col-span-1 content-center cursor-pointer"
          onClick={() => {
            setTempCourses(corsiFirst); // carica lo stato corrente nel menu
            setShowMenu(true);
          }}
        >
          <GearIcon
            size={40}
            className="hover:scale-125 transform
                   transition duration-200 ease-in-out"
          />
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              key="modal"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-lg p-6 w-[1200px] max-h-[80vh] overflow-y-auto"
            >
              {/* Titolo + barra di ricerca */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold mb-2">Primo anno:</h2>
                <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md">
                  <input
                    type="text"
                    placeholder="Cerca corso..."
                    className="w-full outline-none bg-white pl-4 text-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Primo anno */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tempCourses
                  .filter((course) => course.anno === 1)
                  .filter((course) =>
                    course.name.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((course) => (
                    <button
                      key={course.name}
                      onClick={() => toggleTempCourse(course.name)}
                      className={`px-4 py-2 rounded cursor-pointer ${
                        course.active
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {course.name}
                    </button>
                  ))}
              </div>

              {/* Secondo anno */}
              <h2 className="text-lg font-semibold mb-2 mt-7">Secondo anno:</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tempCourses
                  .filter((course) => course.anno === 2)
                  .filter((course) =>
                    course.name.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((course) => (
                    <button
                      key={course.name}
                      onClick={() => toggleTempCourse(course.name)}
                      className={`px-4 py-2 rounded cursor-pointer ${
                        course.active
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {course.name}
                    </button>
                  ))}
              </div>

              {/* Pulsanti azione */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowMenu(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Annulla
                </button>
                <button
                  onClick={saveCourses}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Salva
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
