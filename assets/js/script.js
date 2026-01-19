const company = "HelaDev XR Labs";
const currentWorking = "Endless Runner Game With CSGD Team";
const skills = ["Java", "Flutter", "Unity"];

const frameworks = [
  {
    title: "Unity",
    emoji: "🎮",
    level: "Intermediate",
  },
  {
    title: "Flutter",
    emoji: "📱",
    level: "Intermediate",
  },
  {
    title: "Bootstrap",
    emoji: "🅱️",
    level: "expert",
  },
];

const programmingLanguages = [
  {
    title: "Java",
    emoji: "☕",
    level: "Intermediate",
  },
  {
    title: "Dart",
    emoji: "🎯",
    level: "Intermediate",
  },
  {
    title: "C#",
    emoji: "#️⃣",
    level: "Intermediate",
  },
  {
    title: "JavaScript",
    emoji: "⚡",
    level: "Intermediate",
  },
];

const devTools = [
  {
    title: "Vs-Code",
    emoji: "👨‍💻",
    level: "Expert",
  },
  {
    title: "Git",
    emoji: "📝",
    level: "Expert",
  },
  {
    title: "Blender",
    emoji: "🎭",
    level: "Beginner",
  },
  {
    title: "Figma",
    emoji: "🎨",
    level: "Intermediate",
  },
  {
    title: "Davinci-Resolve",
    emoji: "🎥",
    level: "Intermediate",
  },
];

const projects = [
  {
    title: "Elf Express | Gift Rush",
    technology: "unity",
    tags: ["unity", "c#", "2D"],
    source: "",
    code: [
      "// CSGD Team Project",
      " ",
      "private void DetectPlayer()",
      "{",
      "    Collider[] hits = Physics.OverlapSphere(",
      "        transform.position + offset,",
      "        detectRange,",
      "        playerLayer",
      "    );",
      " ",
      "    if (hits.Length > 0)",
      "    {",
      "        if (playHiddenParticles)",
      "        {",
      "            foreach (ParticleSystem particle in hiddenParticles)",
      "            {",
      "                particle.gameObject.SetActive(true);",
      "                this.gameObject.SetActive(false);",
      "            }",
      "        }",
      "        else",
      "            CollectGift();",
      "    }",
      "}",
    ],
  },
  {
    title: "robot-outline",
    technology: "unity",
    tags: ["unity", "c#", "2D"],
    source: "https://github.com/malaka96/Robot-Outline",
    code: [
      "// Drawing project",
      " ",
      "private LineRenderer _lineRenderer;",
      "private EdgeCollider2D _collider;",
      "private readonly List<Vector2> points = new List<Vector2>()",
      "private const int MAX_POSITION_COUNT = 50;",
      "private void Awake()",
      "{",
      "    _lineRenderer = GetComponent<LineRenderer>();",
      "    _collider = GetComponent<EdgeCollider2D>();",
      "    _collider.transform.position -= transform.position;",
      "}",
    ],
  },
  {
    title: "Jump-Quest",
    technology: "unity",
    tags: ["unity", "c#", "2D"],
    source: "https://github.com/malaka96/jump-quest",
    code: [
      "// 2D game for gamejam project",
      " ",
      "void Update()",
      "{",
      "   if (canMove)",
      "   {",
      '       horizontalInput = Input.GetAxis("Horizontal");',
      "        if (!isWallJumping)",
      "        {",
      "            if (horizontalInput > 0 && !isFacingRight)",
      "                Flip();",
      "            else if (horizontalInput < 0 && isFacingRight)",
      "                Flip();",
      "}",
    ],
  },
  {
    title: "Cosmic-Lifeline",
    technology: "unity",
    tags: ["unity", "c#", "3D"],
    source: "https://heladev.itch.io/cosmiclifeline",
    code: [
      "// Internship Project",
      " ",
      "private void OnTriggerEnter(Collider other)",
      "{",
      '    if (other.gameObject.CompareTag("SpaceShip"))',
      "    {",
      "        if (Spaceship_Controller.isShieldActivated)",
      "        {",
      "            Destroy(gameObject);",
      "            AudioManager.instance.ObstacleHitSfx();",
      '            Debug.Log("shield is activated!");',
      "        }",
      "        else",
      "        {",
      "            // AudioManager.instance.ObstacleHitSfx();",
      "            //destroy obscales and shpaceship",
      "            GameManager gameManagerScript = gameManager.GetComponent<GameManager>();",
      "            gameManagerScript.UpdateShipHealth(-20);",
      '            Debug.Log("you were hit obstacle");',
      "        }",
      "    }",
      "}",
    ],
  },
  {
    title: "Movie-App",
    technology: "Flutter",
    tags: ["Flutter", "Dart", "Android"],
    source: "https://github.com/malaka96/movie-app",
    code: [
      "// mobile app that allows you to browse movie details",
      " ",
      "class _MainScreenState extends State<MainScreen> {",
      "  int pageIndex = 0;",
      "  List<Widget> selectedPage = [HomeScreen(), SearchScreen(), FavoriteScreen()];",
      "",
      "  @override",
      "  Widget build(BuildContext context) {",
      "    return Scaffold(",
      "      body: selectedPage[pageIndex],",
      "      bottomNavigationBar: BottomNavigationBar(",
      "        currentIndex: pageIndex,",
      "        onTap: (index) {",
      "          setState(() {",
      "            pageIndex = index;",
      "          });",
      "        },",
      "        items: const [",
      '          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),',
      '          BottomNavigationBarItem(icon: Icon(Icons.search), label: "search"),',
      "          BottomNavigationBarItem(",
      "            icon: Icon(Icons.favorite),",
      '            label: "favorite",',
      "          ),",
      "        ],",
      "      ),",
      "    );",
      "  }",
      "}",
    ],
  },
  {
    title: "Study-Planner",
    technology: "Flutter",
    tags: ["Flutter", "Dart", "Android"],
    source: "https://github.com/malaka96/study-planner",
    code: [
      "// Mobile app to learn firebase for flutter",
      " ",
      "class CourseService {",
      "  final CollectionReference courseCollection = FirebaseFirestore.instance",
      '      .collection("courses");',
      "",
      "  Future<void> addCourse(Course course) async {",
      "    try {",
      "      final Map<String, dynamic> data = course.toJson();",
      "",
      "      final DocumentReference docRef = await courseCollection.add(data);",
      "      await docRef.update({'id': docRef.id});",
      "    } catch (error) {",
      "      print('error adding course \$error');",
      "    }",
      "  }",
      "}",
    ],
  },
  {
    title: "Weather-App",
    technology: "Flutter",
    tags: ["Flutter", "Dart", "Android"],
    source: "https://github.com/malaka96/weather_app",
    code: [
      "// Mobile app to learn api intergration for flutter",
      " ",
      "class _WeatherScreenState extends State<WeatherScreen> {",
      "  String? selectedValue = 'Colombo';",
      "  List<String> options = ['Colombo', 'Panadura', 'Kurunegala'];",
      "",
      "  Future<Map<String, dynamic>> getCurrentWeather() async {",
      "    try {",
      "      //String weatherLocation = 'panadura';",
      "      final res = await http.get(",
      "        Uri.parse(",
      "          'https://api.openweathermap.org/data/2.5/forecast?q=\$selectedValue&APPID=\$openWeatherAPIKey',",
      "        ),",
      "      );",
      "",
      "      final data = jsonDecode(res.body);",
      "",
      "      if (data['cod'] != '200') {",
      "        throw 'An unexpected error occurred';",
      "      }",
      "      return data;",
      "    } catch (e) {",
      "      throw e.toString();",
      "    }",
      "  }",
      "}",
    ],
  },
  {
    title: "Traffic-Light-System",
    technology: "Java",
    tags: ["Java", "Java-Swing", "Desktop-Application"],
    source: "https://github.com/malaka96/traffic-light-system",
    code: [
      "// project to learn java swing",
      " ",
      "class _WeatherScreenState extends State<WeatherScreen> {",
      "  String? selectedValue = 'Colombo';",
      "  List<String> options = ['Colombo', 'Panadura', 'Kurunegala'];",
      "",
      "  Future<Map<String, dynamic>> getCurrentWeather() async {",
      "    try {",
      "      //String weatherLocation = 'panadura';",
      "      final res = await http.get(",
      "        Uri.parse(",
      "          'https://api.openweathermap.org/data/2.5/forecast?q=\$selectedValue&APPID=\$openWeatherAPIKey',",
      "        ),",
      "      );",
      "",
      "      final data = jsonDecode(res.body);",
      "",
      "      if (data['cod'] != '200') {",
      "        throw 'An unexpected error occurred';",
      "      }",
      "      return data;",
      "    } catch (e) {",
      "      throw e.toString();",
      "    }",
      "  }",
      "}",
    ],
  },
  {
    title: "Defence-System",
    technology: "Java",
    tags: ["Java", "Java-Swing", "Desktop-Application", "OOP"],
    source: "https://github.com/malaka96/traffic-light-system",
    code: [
      "// OOP final coursework for Institute",
      " ",
      "public class Main {",
      "  public static void main(String[] args){",
      "    Controller controller = new Controller();",
      "",
      "    MainController mainController = new MainController(controller);",
      "    mainController.setVisible(true);",
      "",
      "    Helicopter helicopter = new Helicopter(controller);",
      "    helicopter.setVisible(true);",
      "",
      "    // Tank tank = new Tank();",
      "    // tank.setVisible(true);",
      "",
      "    Tank tank = new Tank(controller);",
      "    tank.setVisible(true);",
      "",
      "    Submarine submarine = new Submarine(controller);",
      "    submarine.setVisible(true);",
      "",
      "    controller.addObserver(helicopter);",
      "    controller.addObserver(tank);",
      "    controller.addObserver(submarine);",
      "    controller.addObserver(mainController);",
      "  }",
      "}",
    ],
  },
  {
    title: "Student-Management-System",
    technology: "Java",
    tags: ["Java", "Java-Swing", "Desktop-Application", "OOP"],
    source: "https://github.com/malaka96/student-management-system-with-oop",
    code: [
      "// java project with swing and file handling",
      " ",
      "class Student {",
      "  private String regId;",
      "  private String nic;",
      "  private String name;",
      "",
      "  private int prfMarks;",
      "  private int dbmsMarks;",
      "",
      "  Student(String regId, String nic, String name, int prfMarks, int dbmsMarks) {",
      "    this.regId = regId;",
      "    this.nic = nic;",
      "    this.name = name;",
      "    this.prfMarks = prfMarks;",
      "    this.dbmsMarks = dbmsMarks;",
      "  }",
      "",
      "  void setRegId(String regId) { this.regId = regId; }",
      "  void setNic(String nic) { this.nic = nic; }",
      "  void setName(String name) { this.name = name; }",
      "  void setPrfMarks(int prfMarks) { this.prfMarks = prfMarks; }",
      "  void setDbmsMarks(int dbmsMarks) { this.dbmsMarks = dbmsMarks; }",
      "",
      "  public String toString() {",
      '    return regId + "," + nic + "," + name + "," + String.valueOf(prfMarks) + "," + String.valueOf(dbmsMarks);',
      "  }",
      "",
      "  String getRegId() { return this.regId; }",
      "  String getNic() { return this.nic; }",
      "  String getName() { return this.name; }",
      "  int getPrfMarks() { return this.prfMarks; }",
      "  int getDbmsMarks() { return this.dbmsMarks; }",
    ],
  },
  {
    title: "Ev-Rental-Site",
    technology: "HTML",
    tags: ["HTML", "CSS", "JavaScript", "Web-Developement", "Responsive"],
    source: "https://github.com/malaka96/ev-rental-site",
    code: [
      "// A project(responsive website) that helps improve HTML, CSS, and Javascript knowledge.",
      " ",
      '<section class="filter-section">',
      '  <div class="container">',
      "    <form>",
      '      <div class="row g-3">',
      "        <h2>Filter Section</h2>",
      '        <div class="col-md-3 col-12">',
      '          <input type="text" class="form-control" placeholder="Vehilce Type(eg : car,van,cab)">',
      "        </div>",
      '        <div class="col-md-3 col-12">',
      '          <input type="text" class="form-control" placeholder="Pick Up Location">',
      "        </div>",
      '        <div class="col-md-3 col-12">',
      '          <input type="text" class="form-control" placeholder="Drop Off Location">',
      "        </div>",
      '        <div class="col-md-3 col-12">',
      "          <button>Search</button>",
      "        </div>",
      "      </div>",
      "    </form>",
      "  </div>",
      "</section>",
    ],
  },
  {
    title: "Ecommerce-Site",
    technology: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "Web-Developement", "Responsive"],
    source: "https://github.com/malaka96/e-commerce-js-project",
    code: [
      "// a simple project to improve JavaScript knowledge",
      " ",
      "function addProduct() {",
      "  if (form) {",
      "",
      "    const name = document.querySelector('#product-name');",
      "    const price = document.querySelector('#price-tag');",
      "    const imageUrl = document.querySelector('#image-url');",
      "",
      "    const newItem = {",
      "      name: name.value,",
      "      image: imageUrl.value,",
      "      price: price.value,",
      "      quantity: 1,",
      "      total: price.value,",
      "    };",
      "",
      "    if (name.value && price.value && imageUrl.value) {",
      "      let itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];",
      "      itemsArray.push(newItem);",
      "      localStorage.setItem('itemsArray', JSON.stringify(itemsArray));",
      "      console.log(itemsArray[itemsArray.length - 1]);",
      "      fetchItems(); // Refresh the grid",
      "    } else {",
      "      alert('please fill out all fields');",
      "    }",
      "  }",
    ],
  },
];

// renderProjects(projects, "projects");

function homeWindow() {
  const titleText = 'const developer = "Malaka Madhubhashana"';
  const words = titleText.split(" ");
  const title = document.querySelector("#window-content-title");

  title.innerHTML = words
    .map((word, index) => {
      let color = "";

      if (index === 0) {
        color = "#51a2ff";
      } else if (index === 1) {
        color = "#fdc700";
      } else if (index === 2) {
        color = "white";
      } else if (index >= words.length - 2) {
        color = "#05df72";
      } else {
        color = "black";
      }

      return `<span style="color:${color};">${word}</span>`;
    })
    .join(" ");
}

homeWindow();

const texts = ["// Software Engineer", "// Game Developer"];

const typewriter = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;

function typeLetters() {
  const currentText = texts[textIndex];

  if (charIndex === 0) {
    typewriter.textContent = ""; // clear line
  }

  if (charIndex < currentText.length) {
    typewriter.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeLetters, 100); // typing speed per letter
  } else {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length; // loop
      typeLetters();
    }, 1500); // pause between texts
  }
}

typeLetters();

function homeOtherText() {
  const companyText = document.querySelector("#company");
  companyText.innerHTML = `// Former Game Programmer at <span class="company-name">${company}</span>`;

  const currentProjectText = document.querySelector("#current-project");
  currentProjectText.innerHTML = `Currently working on : <span class="current-project">${currentWorking}</span>`;

  const skillElement = document.querySelector("#skills");
  skillElement.innerHTML =
    `Specializing in: ` +
    skills
      .map((skill, index) => {
        return `<span class = "skill">${skills[index]}</span>`;
      })
      .join(", ");
}

homeOtherText();

function renderProjects(projects) {
  const projectContainer = document.querySelector(".project-windows-content");
  // const container = document.querySelector('.project-pannel');
  // container.innerHTML = ""; // Clear previous content

  projects.forEach((project) => {
    const projectWindow = document.createElement("div");
    projectWindow.className = "project-window";

    projectWindow.innerHTML = `
        <div class="window-top-bar">
                        <div class="project-window-top-bar-item d-flex align-items-center justify-content-center gap-3">
                            <div class="window-dot-container">
                                <div class="window-dot purple"></div>
                            </div>
                            <div class="window-title">
                                <p>${project.title}</p>
                            </div>
                        </div>
                        <span class="chip">
                            <p class="chip-text">${project.technology}</p>
                        </span>
                    </div>
                    <div class="window-content">
                        <div class="project-pannel">
                             
                        </div>
                        <div class="project-tags"></div>
                        <div class="project-sources d-flex justify-content-start align-items-center gap-1">
                            <a href="${project.source}" target="_blank" rel="noopener noreferrer">
                                <img src="assets/images/github_light.png" alt="github-logo"
                                    style="width: 18px; height: 18px;">
                            </a>
                            <p>source</p>
                        </div>
                    </div>
        `;

    // Create and style the title
    // const titleEl = document.createElement("p");
    // titleEl.textContent = project.title;
    // titleEl.style.fontFamily = "monospace";
    // titleEl.style.color = "#6a9955"; // comment-style green
    // container.appendChild(titleEl);

    if (project.code) {
      const container = projectWindow.querySelector(".project-pannel");
      const codeBlock = document.createElement("pre");
      //   codeBlock.style.background = "#1e1e1e";
      codeBlock.style.color = "#d4d4d4";
      codeBlock.style.padding = "10px";
      codeBlock.style.borderRadius = "6px";
      codeBlock.style.overflowX = "auto";
      codeBlock.style.fontFamily = "Fira Code, monospace";

      codeBlock.innerHTML = project.code
        .map((line) => `<div>${line}</div>`)
        .join("");
      container.appendChild(codeBlock);
    }

    const container = projectWindow.querySelector(".project-tags");
    project.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.classList.add("chip");

      const chipText = document.createElement("p");
      chipText.classList.add("chip-text");
      chipText.textContent = tag;
      chip.appendChild(chipText);

      container.appendChild(chip);
    });

    projectContainer.appendChild(projectWindow);
  });
}

renderProjects(projects);

function renderSkills() {
  const frameworkElement = document.querySelector(".frameworks");

  frameworks.forEach((framework) => {
    const card = document.createElement("div");
    card.classList.add("w-card");
    card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${framework.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${framework.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${framework.level}</p>
                                </span>
                            </div>
                            <p>1. "${framework.title}" : "${framework.level}"</p>
            </div>
        `;
    frameworkElement.appendChild(card);
  });

  const programmingLanElement = document.querySelector(".p-languages");

  programmingLanguages.forEach((language) => {
    const card = document.createElement("div");
    card.classList.add("w-card");
    card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${language.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${language.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${language.level}</p>
                                </span>
                            </div>
                            <p>1. "${language.title}" : "${language.level}"</p>
            </div>
        `;
    programmingLanElement.appendChild(card);
  });

  const devToolElement = document.querySelector(".dev-tools");

  devTools.forEach((devTool) => {
    const card = document.createElement("div");
    card.classList.add("w-card");
    card.innerHTML = `
            <div class="w-card-content">
                            <h6 class="title">${devTool.title}</h6>
                            <div class="w-card-center d-flex align-items-center">
                                <h4>${devTool.emoji}</h4>
                                <span class="chip">
                                    <p class="chip-text">${devTool.level}</p>
                                </span>
                            </div>
                            <p>1. "${devTool.title}" : "${devTool.level}"</p>
            </div>
        `;
    devToolElement.appendChild(card);
  });
}

renderSkills();

console.log("script is loaded");
