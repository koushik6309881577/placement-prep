// =========================================================
// script.js — Prepwell: Beginner-to-Placement Learning Platform
// Plain vanilla JavaScript. No libraries, no frameworks.
// =========================================================

// ---------------------------------------------------------
// SMALL DATA BUILDERS (keep the big data block below readable)
// ---------------------------------------------------------
function pt(name, explain, example, practice) { return { name, explain, example, practice, status: "not-started" }; }
function sq(name, explain, example, url) { return { name, explain, example, practiceUrl: url, status: "not-started", problemsSolved: 0 }; }
function cs(name, explain, example, interviewQ) { return { name, explain, example, interviewQ, status: "not-started" }; }
let PROBLEM_ID = 1;
function prob(title, difficulty, slug, topic) {
  return { id: PROBLEM_ID++, title, difficulty, url: "https://leetcode.com/problems/" + slug + "/", platform: "LeetCode", topic, solved: false };
}

// --------------------------------------------------------- PROGRAMMING CONTENT (Java / C++ / Python, 3 levels each)
// ---------------------------------------------------------
const PROGRAMMING_CONTENT = {
  java: {
    beginner: [
      pt("Variables", "A variable is a named container that stores a value your program can use later.",
        'int age = 20;\nString name = "Koushik";\nSystem.out.println(name + " is " + age);',
        "Create a Java program that stores your name and age in variables and prints them."),
      pt("Loops", "Loops let you repeat a block of code without writing it multiple times.",
        "for (int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}",
        "Write a Java program that prints numbers 1 to 10 using a for loop."),
      pt("Functions", "A function (called a method in Java) groups reusable code under one name.",
        "static int add(int a, int b) {\n  return a + b;\n}",
        "Write a Java method that takes two numbers and returns their sum.")
    ],
    intermediate: [
      pt("OOP Basics", "Object-Oriented Programming organizes code into classes and objects that model real things.",
        'class Student {\n  String name;\n  void greet() { System.out.println("Hi, " + name); }\n}',
        "Create a Student class with a name field and a method that prints a greeting."),
      pt("Exception Handling", "try/catch lets your program handle errors gracefully instead of crashing.",
        'try {\n  int x = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Cannot divide by zero");\n}',
        "Write a program that divides two numbers and handles division-by-zero safely."),
      pt("Recursion", "A recursive function calls itself to solve a smaller version of the same problem.",
        "static int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
        "Write a recursive Java method that calculates the factorial of a number.")
    ],
    advanced: [
      pt("Advanced Data Structures", "Structures like HashMaps let you store and look up data far more efficiently than scanning an array.",
        'HashMap<String, Integer> marks = new HashMap<>();\nmarks.put("Math", 90);',
        "Use a HashMap to store 3 subjects and their marks, then print them."),
      pt("Algorithm Optimization", "Optimizing means reducing the time or memory your code needs — e.g. trading a nested loop for a HashSet lookup.",
        "// Instead of an O(n^2) nested loop to find duplicates,\n// use a HashSet for O(n) lookups",
        "Rewrite a nested-loop duplicate-checker to use a HashSet instead."),
      pt("Competitive Programming Basics", "Competitive programming is about solving problems correctly and quickly under constraints — the DSA page is where you'll practice this.",
        "// No single code example — this is a practice discipline.",
        "Solve your first problem on the DSA page and note how long it took you.")
    ]
  },
  cpp: {
    beginner: [
      pt("Variables", "A variable is a named container that stores a value your program can use later.",
        'int age = 20;\nstring name = "Koushik";\ncout << name << " is " << age;',
        "Create a C++ program that stores your name and age in variables and prints them."),
      pt("Loops", "Loops let you repeat a block of code without writing it multiple times.",
        "for (int i = 1; i <= 5; i++) {\n  cout << i << endl;\n}",
        "Write a C++ program that prints numbers 1 to 10 using a for loop."),
      pt("Functions", "A function groups reusable code under one name.",
        "int add(int a, int b) {\n  return a + b;\n}",
        "Write a C++ function that takes two numbers and returns their sum.")
    ],
    intermediate: [
      pt("OOP Basics", "Object-Oriented Programming organizes code into classes and objects that model real things.",
        'class Student {\npublic:\n  string name;\n  void greet() { cout << "Hi, " << name; }\n};',
        "Create a Student class with a name field and a method that prints a greeting."),
      pt("Exception Handling", "try/catch lets your program handle errors gracefully instead of crashing.",
        'try {\n  if (b == 0) throw runtime_error("Cannot divide by zero");\n} catch (exception &e) {\n  cout << e.what();\n}',
        "Write a program that divides two numbers and handles division-by-zero safely."),
      pt("Recursion", "A recursive function calls itself to solve a smaller version of the same problem.",
        "int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
        "Write a recursive C++ function that calculates the factorial of a number.")
    ],
    advanced: [
      pt("Advanced Data Structures", "STL containers like unordered_map give you fast key-based lookups instead of scanning arrays.",
        'unordered_map<string,int> marks;\nmarks["Math"] = 90;',
        "Use an unordered_map to store 3 subjects and their marks, then print them."),
      pt("Algorithm Optimization", "Optimizing means reducing the time or memory your code needs — e.g. trading a nested loop for a hash-based lookup.",
        "// Instead of an O(n^2) nested loop to find duplicates,\n// use an unordered_set for O(n) lookups",
        "Rewrite a nested-loop duplicate-checker to use an unordered_set instead."),
      pt("Competitive Programming Basics", "Competitive programming is about solving problems correctly and quickly under constraints — the DSA page is where you'll practice this.",
        "// No single code example — this is a practice discipline.",
        "Solve your first problem on the DSA page and note how long it took you.")
    ]
  },
  python: {
    beginner: [
      pt("Variables", "A variable is a named container that stores a value your program can use later.",
        'age = 20\nname = "Koushik"\nprint(name, "is", age)',
        "Create a Python program that stores your name and age in variables and prints them."),
      pt("Loops", "Loops let you repeat a block of code without writing it multiple times.",
        "for i in range(1, 6):\n    print(i)",
        "Write a Python program that prints numbers 1 to 10 using a for loop."),
      pt("Functions", "A function groups reusable code under one name.",
        "def add(a, b):\n    return a + b",
        "Write a Python function that takes two numbers and returns their sum.")
    ],
    intermediate: [
      pt("OOP Basics", "Object-Oriented Programming organizes code into classes and objects that model real things.",
        'class Student:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        print("Hi,", self.name)',
        "Create a Student class with a name attribute and a method that prints a greeting."),
      pt("Exception Handling", "try/except lets your program handle errors gracefully instead of crashing.",
        'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")',
        "Write a program that divides two numbers and handles division-by-zero safely."),
      pt("Recursion", "A recursive function calls itself to solve a smaller version of the same problem.",
        "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)",
        "Write a recursive Python function that calculates the factorial of a number.")
    ],
    advanced: [
      pt("Advanced Data Structures", "Dictionaries give you fast key-based lookups instead of scanning a list.",
        'marks = {}\nmarks["Math"] = 90',
        "Use a dictionary to store 3 subjects and their marks, then print them."),
      pt("Algorithm Optimization", "Optimizing means reducing the time or memory your code needs — e.g. trading a nested loop for a set lookup.",
        "# Instead of an O(n^2) nested loop to find duplicates,\n# use a set for O(n) lookups",
        "Rewrite a nested-loop duplicate-checker to use a set instead."),
      pt("Competitive Programming Basics", "Competitive programming is about solving problems correctly and quickly under constraints — the DSA page is where you'll practice this.",
        "# No single code example — this is a practice discipline.",
        "Solve your first problem on the DSA page and note how long it took you.")
    ]
  }
};

// ---------------------------------------------------------
// WEB DEVELOPMENT CONTENT
// ---------------------------------------------------------
const WEBDEV_CONTENT = {
  html: [
    pt("Basic Structure", "Every HTML page starts with a standard skeleton the browser understands.",
      "<!DOCTYPE html>\n<html>\n  <head><title>My Page</title></head>\n  <body><h1>Hello World</h1></body>\n</html>",
      "Create an HTML file with a title and one heading that shows your name."),
    pt("Semantic HTML", "Semantic tags like <header>, <nav> and <main> describe the meaning of content, which helps accessibility and SEO.",
      "<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>",
      "Rewrite a page using <header>, <main> and <footer> instead of plain <div>s."),
    pt("Forms", "Forms collect input from users, like a login or signup screen.",
      '<form>\n  <input type="text" name="name">\n  <button>Submit</button>\n</form>',
      "Create a form with a name field and an email field."),
    pt("Tables", "Tables organise data into rows and columns.",
      "<table>\n  <tr><th>Name</th><th>Marks</th></tr>\n  <tr><td>Koushik</td><td>90</td></tr>\n</table>",
      "Create a table showing 3 subjects and their marks.")
  ],
  css: [
    pt("Box Model", "Every element is a box made of content, padding, border and margin.",
      ".box {\n  padding: 10px;\n  border: 1px solid black;\n  margin: 20px;\n}",
      "Style a div with padding, a border and a margin."),
    pt("Flexbox", "Flexbox arranges items in a row or column and distributes space between them easily.",
      ".container {\n  display: flex;\n  justify-content: space-between;\n}",
      "Arrange 3 boxes in a row with equal spacing using flexbox."),
    pt("Grid", "CSS Grid lets you build two-dimensional layouts with rows and columns.",
      ".grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}",
      "Create a 3-column grid layout for 6 cards."),
    pt("Responsive Design", "Media queries let your layout adapt to different screen sizes.",
      "@media (max-width: 600px) {\n  .box { flex-direction: column; }\n}",
      "Make a layout stack vertically on screens narrower than 600px.")
  ],
  js: [
    pt("Variables & Data Types", "Variables store values; JavaScript has types like string, number and boolean.",
      'let age = 20;\nconst name = "Koushik";\nconsole.log(typeof age);',
      "Declare a variable for your age and log its type."),
    pt("Functions", "A function groups reusable code under one name.",
      "function add(a, b) {\n  return a + b;\n}",
      "Write a function that returns the square of a number."),
    pt("Arrays & Objects", "Arrays store ordered lists; objects store named key-value pairs.",
      'const student = { name: "Koushik", marks: [90, 85, 88] };',
      "Create an object with your name and an array of 3 subjects."),
    pt("DOM", "The DOM is how JavaScript reads and changes a page's HTML.",
      'document.getElementById("title").textContent = "Hello!";',
      "Change the text of an element on a page using JavaScript."),
    pt("Events", "Event listeners let your code react to things like clicks.",
      'button.addEventListener("click", () => alert("Clicked!"));',
      "Make a button show an alert when clicked."),
    pt("Fetch API", "fetch() lets JavaScript request data from a server without reloading the page.",
      'fetch("https://api.example.com/data")\n  .then(res => res.json())\n  .then(data => console.log(data));',
      "Look up any public API online and try fetching data from it.")
  ],
  projects: [
    { name: "Calculator", description: "A basic calculator that adds, subtracts, multiplies and divides.", status: "not-started" },
    { name: "To-Do List", description: "A list where you can add, complete and delete tasks.", status: "not-started" },
    { name: "Quiz App", description: "A simple multiple-choice quiz with a score at the end.", status: "not-started" },
    { name: "Weather App", description: "Fetches real weather data from a public API and displays it.", status: "not-started" },
    { name: "Portfolio", description: "A personal one-page site showcasing your projects and skills.", status: "not-started" },
    { name: "Expense Tracker", description: "Tracks income and expenses with a running total, saved to localStorage.", status: "not-started" }
  ]
};

// ---------------------------------------------------------
// SQL CONTENT (real HackerRank/LeetCode practice links)
// ---------------------------------------------------------
const HR_SQL = "https://www.hackerrank.com/domains/sql";
const LC_DB = "https://leetcode.com/problemset/database/";
const SQL_CONTENT = {
  beginner: [
    sq("SELECT", "Retrieves data from a table.", "SELECT name, age FROM students;", "https://leetcode.com/problems/combine-two-tables/"),
    sq("WHERE", "Filters rows based on a condition.", "SELECT * FROM students WHERE age > 18;", "https://leetcode.com/problems/employees-earning-more-than-their-managers/"),
    sq("ORDER BY", "Sorts the result set.", "SELECT * FROM students ORDER BY age DESC;", HR_SQL),
    sq("DISTINCT", "Removes duplicate rows from the result.", "SELECT DISTINCT branch FROM students;", "https://leetcode.com/problems/customers-who-never-order/"),
    sq("LIMIT", "Restricts how many rows are returned.", "SELECT * FROM students LIMIT 5;", HR_SQL),
    sq("LIKE", "Searches for a text pattern.", "SELECT * FROM students WHERE name LIKE 'K%';", HR_SQL),
    sq("IN", "Checks if a value matches any in a list.", "SELECT * FROM students WHERE branch IN ('CSE','ECE');", HR_SQL),
    sq("BETWEEN", "Filters values within a range.", "SELECT * FROM students WHERE age BETWEEN 18 AND 22;", HR_SQL)
  ],
  intermediate: [
    sq("GROUP BY", "Groups rows sharing a value so you can aggregate them.", "SELECT branch, COUNT(*) FROM students GROUP BY branch;", "https://leetcode.com/problems/department-highest-salary/"),
    sq("HAVING", "Filters groups — like WHERE, but applied after grouping.", "SELECT branch, COUNT(*) FROM students GROUP BY branch HAVING COUNT(*) > 10;", HR_SQL),
    sq("Aggregate Functions", "COUNT, SUM, AVG, MIN and MAX summarise data.", "SELECT AVG(age) FROM students;", "https://leetcode.com/problems/second-highest-salary/"),
    sq("Joins", "Combines rows from two tables based on a related column.", "SELECT s.name, c.name FROM students s\nJOIN colleges c ON s.college_id = c.id;", "https://leetcode.com/problems/combine-two-tables/"),
    sq("CASE", "Adds if/else logic inside a query.", "SELECT name,\n  CASE WHEN age < 18 THEN 'Minor' ELSE 'Adult' END\nFROM students;", HR_SQL),
    sq("Subqueries", "A query nested inside another query.", "SELECT name FROM students\nWHERE age > (SELECT AVG(age) FROM students);", "https://leetcode.com/problems/customers-who-never-order/"),
    sq("UNION", "Combines results from two queries, removing duplicates.", "SELECT name FROM students\nUNION\nSELECT name FROM alumni;", HR_SQL),
    sq("INTERSECT", "Returns rows common to two queries.", "SELECT name FROM students\nINTERSECT\nSELECT name FROM scholarship_holders;", HR_SQL)
  ],
  advanced: [
    sq("Window Functions", "Perform calculations across related rows without collapsing them like GROUP BY does.", "SELECT name, RANK() OVER (ORDER BY marks DESC)\nFROM students;", LC_DB),
    sq("ROW_NUMBER", "Assigns a unique sequential number to each row.", "SELECT name, ROW_NUMBER() OVER (ORDER BY marks DESC)\nFROM students;", LC_DB),
    sq("RANK", "Like ROW_NUMBER, but tied rows share the same rank.", "SELECT name, RANK() OVER (ORDER BY marks DESC)\nFROM students;", LC_DB),
    sq("DENSE_RANK", "Like RANK, but without gaps in the ranking after ties.", "SELECT name, DENSE_RANK() OVER (ORDER BY marks DESC)\nFROM students;", LC_DB),
    sq("CTE", "A WITH clause that names a temporary result set for readability.", "WITH topStudents AS (\n  SELECT * FROM students WHERE marks > 90\n)\nSELECT * FROM topStudents;", LC_DB),
    sq("Complex Joins", "Combining 3+ tables, or using LEFT/RIGHT joins for optional matches.", "SELECT s.name FROM students s\nLEFT JOIN scholarships sc ON s.id = sc.student_id;", LC_DB),
    sq("Advanced Subqueries", "A subquery used for more complex row-by-row comparisons.", "SELECT name FROM students s\nWHERE marks > (SELECT AVG(marks) FROM students);", LC_DB),
    sq("Correlated Subqueries", "A subquery that references the outer query and runs once per outer row.", "SELECT name FROM students s\nWHERE marks > (\n  SELECT AVG(marks) FROM students WHERE branch = s.branch\n);", LC_DB)
  ]
};

// ---------------------------------------------------------
// DSA PROBLEM TRACKER (real LeetCode links)
// ---------------------------------------------------------
const DSA_TOPICS = [
  { name: "Arrays", problems: [
    prob("Two Sum", "Easy", "two-sum", "Arrays"),
    prob("Best Time to Buy and Sell Stock", "Easy", "best-time-to-buy-and-sell-stock", "Arrays"),
    prob("Contains Duplicate", "Easy", "contains-duplicate", "Arrays"),
    prob("Maximum Subarray", "Medium", "maximum-subarray", "Arrays"),
    prob("Product of Array Except Self", "Medium", "product-of-array-except-self", "Arrays"),
    prob("3Sum", "Medium", "3sum", "Arrays")
  ]},
  { name: "Strings", problems: [
    prob("Valid Anagram", "Easy", "valid-anagram", "Strings"),
    prob("Valid Parentheses", "Easy", "valid-parentheses", "Strings"),
    prob("Longest Substring Without Repeating Characters", "Medium", "longest-substring-without-repeating-characters", "Strings"),
    prob("Group Anagrams", "Medium", "group-anagrams", "Strings")
  ]},
  { name: "Hashing", problems: [
    prob("Top K Frequent Elements", "Medium", "top-k-frequent-elements", "Hashing"),
    prob("Longest Consecutive Sequence", "Medium", "longest-consecutive-sequence", "Hashing"),
    prob("Subarray Sum Equals K", "Medium", "subarray-sum-equals-k", "Hashing")
  ]},
  { name: "Two Pointers", problems: [
    prob("Container With Most Water", "Medium", "container-with-most-water", "Two Pointers"),
    prob("Trapping Rain Water", "Hard", "trapping-rain-water", "Two Pointers"),
    prob("Valid Palindrome", "Easy", "valid-palindrome", "Two Pointers")
  ]},
  { name: "Sliding Window", problems: [
    prob("Longest Repeating Character Replacement", "Medium", "longest-repeating-character-replacement", "Sliding Window"),
    prob("Minimum Window Substring", "Hard", "minimum-window-substring", "Sliding Window")
  ]},
  { name: "Stack", problems: [
    prob("Min Stack", "Medium", "min-stack", "Stack"),
    prob("Evaluate Reverse Polish Notation", "Medium", "evaluate-reverse-polish-notation", "Stack"),
    prob("Daily Temperatures", "Medium", "daily-temperatures", "Stack")
  ]},
  { name: "Queue", problems: [
    prob("Implement Queue using Stacks", "Easy", "implement-queue-using-stacks", "Queue"),
    prob("Design Circular Queue", "Medium", "design-circular-queue", "Queue")
  ]},
  { name: "Linked List", problems: [
    prob("Reverse Linked List", "Easy", "reverse-linked-list", "Linked List"),
    prob("Merge Two Sorted Lists", "Easy", "merge-two-sorted-lists", "Linked List"),
    prob("Linked List Cycle", "Easy", "linked-list-cycle", "Linked List"),
    prob("Reorder List", "Medium", "reorder-list", "Linked List")
  ]},
  { name: "Binary Search", problems: [
    prob("Binary Search", "Easy", "binary-search", "Binary Search"),
    prob("Search in Rotated Sorted Array", "Medium", "search-in-rotated-sorted-array", "Binary Search"),
    prob("Find Minimum in Rotated Sorted Array", "Medium", "find-minimum-in-rotated-sorted-array", "Binary Search"),
    prob("Koko Eating Bananas", "Medium", "koko-eating-bananas", "Binary Search")
  ]},
  { name: "Sorting", problems: [
    prob("Sort Colors", "Medium", "sort-colors", "Sorting"),
    prob("Merge Intervals", "Medium", "merge-intervals", "Sorting")
  ]},
  { name: "Trees", problems: [
    prob("Maximum Depth of Binary Tree", "Easy", "maximum-depth-of-binary-tree", "Trees"),
    prob("Same Tree", "Easy", "same-tree", "Trees"),
    prob("Invert Binary Tree", "Easy", "invert-binary-tree", "Trees"),
    prob("Binary Tree Level Order Traversal", "Medium", "binary-tree-level-order-traversal", "Trees"),
    prob("Validate Binary Search Tree", "Medium", "validate-binary-search-tree", "Trees")
  ]},
  { name: "Binary Search Tree", problems: [
    prob("Lowest Common Ancestor of a BST", "Medium", "lowest-common-ancestor-of-a-binary-search-tree", "Binary Search Tree"),
    prob("Kth Smallest Element in a BST", "Medium", "kth-smallest-element-in-a-bst", "Binary Search Tree")
  ]},
  { name: "Heap / Priority Queue", problems: [
    prob("Kth Largest Element in an Array", "Medium", "kth-largest-element-in-an-array", "Heap / Priority Queue"),
    prob("Find Median from Data Stream", "Hard", "find-median-from-data-stream", "Heap / Priority Queue")
  ]},
  { name: "Graphs", problems: [
    prob("Number of Islands", "Medium", "number-of-islands", "Graphs"),
    prob("Clone Graph", "Medium", "clone-graph", "Graphs"),
    prob("Course Schedule", "Medium", "course-schedule", "Graphs"),
    prob("Pacific Atlantic Water Flow", "Medium", "pacific-atlantic-water-flow", "Graphs")
  ]},
  { name: "Recursion", problems: [
    prob("Climbing Stairs", "Easy", "climbing-stairs", "Recursion"),
    prob("Fibonacci Number", "Easy", "fibonacci-number", "Recursion"),
    prob("Power of Two", "Easy", "power-of-two", "Recursion")
  ]},
  { name: "Backtracking", problems: [
    prob("Subsets", "Medium", "subsets", "Backtracking"),
    prob("Permutations", "Medium", "permutations", "Backtracking"),
    prob("Combination Sum", "Medium", "combination-sum", "Backtracking"),
    prob("Word Search", "Medium", "word-search", "Backtracking")
  ]},
  { name: "Greedy", problems: [
    prob("Jump Game", "Medium", "jump-game", "Greedy"),
    prob("Gas Station", "Medium", "gas-station", "Greedy")
  ]},
  { name: "Dynamic Programming", problems: [
    prob("House Robber", "Medium", "house-robber", "Dynamic Programming"),
    prob("Coin Change", "Medium", "coin-change", "Dynamic Programming"),
    prob("Longest Increasing Subsequence", "Medium", "longest-increasing-subsequence", "Dynamic Programming"),
    prob("Word Break", "Medium", "word-break", "Dynamic Programming"),
    prob("Unique Paths", "Medium", "unique-paths", "Dynamic Programming")
  ]}
];

// ---------------------------------------------------------
// CORE CS CONTENT
// ---------------------------------------------------------
const CORECS_CONTENT = {
  oop: [
    cs("Class & Object", "A class is a blueprint; an object is an actual instance created from that blueprint.", 'class Car { String color; }\nCar myCar = new Car();', "What is the difference between a class and an object?"),
    cs("Encapsulation", "Bundling data and methods together, and hiding internal details using private fields.", "private int balance;\npublic int getBalance() { return balance; }", "Why is encapsulation useful in real projects?"),
    cs("Inheritance", "A class can inherit fields and methods from another class.", "class Dog extends Animal { }", "What is the difference between inheritance and composition?"),
    cs("Polymorphism", "The same method call behaves differently depending on the actual object.", "Animal a = new Dog();\na.makeSound();", "What is the difference between method overloading and overriding?"),
    cs("Abstraction", "Hiding complex implementation and exposing only essential features.", "abstract class Shape {\n  abstract double area();\n}", "What is the difference between an abstract class and an interface?")
  ],
  dbms: [
    cs("Primary & Foreign Key", "A primary key uniquely identifies a row; a foreign key links to a primary key in another table.", "CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  student_id INT REFERENCES students(id)\n);", "Can a table have more than one foreign key?"),
    cs("Normalization", "Organizing tables to reduce data redundancy, typically up to 3NF.", "Splitting a students table so an address isn't repeated for every course a student takes.", "What problem does normalization solve?"),
    cs("ACID Transactions", "Atomicity, Consistency, Isolation, Durability — properties that make transactions reliable.", "A bank transfer either fully completes or doesn't happen at all — that's atomicity.", "Explain ACID with a real-world example."),
    cs("Indexing", "An index speeds up data retrieval, like a book's index — at the cost of extra storage and slower writes.", "CREATE INDEX idx_name ON students(name);", "When could an index hurt performance instead of helping?"),
    cs("Joins", "Combining rows from two or more tables based on a related column.", "SELECT s.name, c.name\nFROM students s JOIN colleges c ON s.college_id = c.id;", "What's the difference between INNER JOIN and LEFT JOIN?")
  ],
  os: [
    cs("Process & Thread", "A process is a running program with its own memory; a thread is a lightweight unit within a process that shares memory.", "One Chrome window = one process; each open tab may run as a separate thread/process.", "What is the main difference between a process and a thread?"),
    cs("CPU Scheduling", "Algorithms like FCFS, SJF and Round Robin decide which process runs next on the CPU.", "Round Robin gives each process a fixed time slice before moving to the next.", "What is Round Robin scheduling and where is it used?"),
    cs("Deadlock", "A situation where two or more processes wait forever for resources held by each other.", "Process A holds Resource 1 and waits for Resource 2, while Process B holds Resource 2 and waits for Resource 1.", "What are the four necessary conditions for deadlock?"),
    cs("Memory Management & Paging", "The OS divides memory into fixed-size pages so processes can use non-contiguous physical memory.", "A 4KB page lets the OS load only the parts of a program currently needed into RAM.", "What is virtual memory and why is it useful?")
  ],
  cn: [
    cs("OSI Model", "A 7-layer conceptual model describing how data travels across a network.", "Physical → Data Link → Network → Transport → Session → Presentation → Application.", "Name the 7 layers of the OSI model."),
    cs("TCP/IP & Addressing", "TCP/IP is the protocol suite the internet runs on; an IP address identifies a device on a network.", "192.168.1.1 is a typical private IPv4 address.", "What's the difference between TCP and UDP?"),
    cs("HTTP/HTTPS", "HTTP is how browsers and servers communicate; HTTPS adds encryption via TLS.", "https://example.com — the 's' means the connection is encrypted.", "What happens when you type a URL into a browser?"),
    cs("DNS", "DNS translates human-readable domain names into IP addresses.", "Typing google.com triggers a DNS lookup that returns something like 142.250.190.14.", "What is DNS and why do we need it?")
  ],
  se: [
    cs("SDLC Basics", "The Software Development Life Cycle: requirements, design, development, testing, deployment, maintenance.", "A college project usually informally follows: gather requirements → design → build → test → submit.", "What are the phases of SDLC?"),
    cs("Agile", "An iterative approach that delivers software in small increments called sprints.", "A 2-week sprint might deliver one working feature instead of waiting months for the whole product.", "What is the difference between Agile and Waterfall?")
  ]
};

// ---------------------------------------------------------
// APTITUDE QUESTION BANK
// ---------------------------------------------------------
let QID = 1;
function q(category, topic, question, options, correct, explanation) {
  return { id: QID++, category, topic, question, options, correct, explanation };
}
const APTITUDE_BANK = [
  q("Quantitative", "Percentages", "What is 20% of 250?", ["25", "40", "50", "60"], 2, "20% of 250 = 0.20 \u00d7 250 = 50."),
  q("Quantitative", "Profit and Loss", "A shopkeeper buys an item for \u20b9400 and sells it for \u20b9480. What is the profit percentage?", ["15%", "20%", "25%", "30%"], 1, "Profit = 480 \u2212 400 = 80. Profit% = 80/400 \u00d7 100 = 20%."),
  q("Quantitative", "Ratios", "The ratio of two numbers is 3:5 and their sum is 64. What is the smaller number?", ["20", "24", "28", "32"], 1, "3+5 = 8 parts. 64/8 = 8 per part. Smaller number = 3 \u00d7 8 = 24."),
  q("Quantitative", "Time and Work", "A can complete a job in 10 days, B in 15 days. Working together, how many days will they take?", ["5", "6", "7", "8"], 1, "Combined rate = 1/10 + 1/15 = 1/6, so together they take 6 days."),
  q("Quantitative", "Compound Interest", "What is the compound interest on \u20b91000 at 10% per annum for 2 years?", ["\u20b9190", "\u20b9200", "\u20b9210", "\u20b9220"], 2, "Amount = 1000 \u00d7 (1.1)\u00b2 = 1210. CI = 1210 \u2212 1000 = \u20b9210."),
  q("Logical", "Coding-Decoding", "If 'CAT' is coded as 'DBU', how is 'DOG' coded (each letter shifted forward by 1)?", ["EPH", "EPI", "FQH", "EQH"], 0, "Each letter shifts forward by 1: D\u2192E, O\u2192P, G\u2192H, giving EPH."),
  q("Logical", "Blood Relations", "Pointing to a photo, Ravi said: 'She is the daughter of my grandfather's only son.' How is she related to Ravi?", ["Sister", "Cousin", "Aunt", "Niece"], 0, "Grandfather's only son is Ravi's father, so his daughter is Ravi's sister."),
  q("Logical", "Directions", "A man walks 5km North, then 3km East, then 5km South. How far is he from his starting point?", ["3km", "5km", "8km", "13km"], 0, "The North and South legs cancel out, leaving only the 3km East displacement."),
  q("Logical", "Series", "Find the next number: 2, 6, 12, 20, 30, ?", ["40", "42", "44", "36"], 1, "Differences are 4, 6, 8, 10, 12 — so the next term is 30 + 12 = 42."),
  q("Logical", "Syllogisms", "All pens are books. All books are tables. Conclusion: All pens are tables. Is this valid?", ["True", "False", "Cannot be determined", "None of these"], 0, "Pens \u2286 Books \u2286 Tables forms a valid chain, so all pens are indeed tables."),
  q("Verbal", "Vocabulary", "Choose the correct synonym for 'Abundant'.", ["Scarce", "Plentiful", "Limited", "Rare"], 1, "'Abundant' means existing in large quantities, matching 'Plentiful'."),
  q("Verbal", "Vocabulary", "Choose the correct antonym for 'Optimistic'.", ["Hopeful", "Cheerful", "Pessimistic", "Confident"], 2, "'Pessimistic' is the direct opposite of 'Optimistic'."),
  q("Verbal", "Grammar", "Choose the grammatically correct sentence.", ["He don't like tea.", "He doesn't likes tea.", "He doesn't like tea.", "He not like tea."], 2, "'Doesn't' pairs with the base verb 'like', not 'likes'."),
  q("Verbal", "Fill in the Blanks", "Fill in the blank: She has been working here ___ 2019.", ["since", "for", "from", "at"], 0, "'Since' is used with a specific starting point in time, like a year."),
  q("Verbal", "Grammar", "Choose the correctly spelled word.", ["Recieve", "Receive", "Receve", "Receeve"], 1, "'i before e except after c': the correct spelling is Receive.")
];

// ---------------------------------------------------------
// MOCK TEST CONCEPT BANKS (DSA / SQL / Programming / Core CS)
// ---------------------------------------------------------
const MOCK_BANKS = {
  DSA: [
    q("DSA", "Complexity", "What is the time complexity of binary search on a sorted array of n elements?", ["O(n)", "O(log n)", "O(n log n)", "O(1)"], 1, "Binary search halves the search space each step, giving O(log n)."),
    q("DSA", "Stack", "Which data structure uses LIFO (Last In First Out) order?", ["Queue", "Stack", "Array", "Linked List"], 1, "A Stack follows LIFO \u2014 the last element pushed is the first popped."),
    q("DSA", "Sorting", "What is the worst-case time complexity of Bubble Sort?", ["O(n)", "O(n log n)", "O(n\u00b2)", "O(log n)"], 2, "Bubble Sort repeatedly compares adjacent pairs, giving O(n\u00b2) worst case."),
    q("DSA", "Trees", "Which traversal visits the root node first?", ["Inorder", "Preorder", "Postorder", "Level order"], 1, "Preorder visits Root \u2192 Left \u2192 Right, so the root comes first."),
    q("DSA", "DP", "What does Dynamic Programming primarily optimize?", ["Memory only", "Overlapping subproblems by storing results", "Sorting speed", "Network calls"], 1, "DP avoids recomputation by storing (memoizing) results of overlapping subproblems.")
  ],
  SQL: [
    q("SQL", "HAVING", "Which SQL clause filters groups after GROUP BY?", ["WHERE", "HAVING", "ORDER BY", "LIMIT"], 1, "HAVING filters aggregated groups; WHERE filters rows before grouping."),
    q("SQL", "Joins", "Which JOIN returns all rows from the left table and matching rows from the right?", ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], 1, "LEFT JOIN keeps every left-table row even without a match on the right."),
    q("SQL", "DISTINCT", "Which keyword removes duplicate rows from a result set?", ["UNIQUE", "DISTINCT", "FILTER", "ONLY"], 1, "DISTINCT removes duplicate rows from the SELECT result."),
    q("SQL", "Keys", "What does a Primary Key guarantee?", ["Fast sorting", "Uniqueness and non-null values per row", "Encryption", "Automatic backups"], 1, "A Primary Key uniquely identifies each row and cannot be NULL."),
    q("SQL", "Aggregate", "Which function counts rows in a table?", ["SUM()", "AVG()", "COUNT()", "MAX()"], 2, "COUNT() returns the number of rows matching a query.")
  ],
  Programming: [
    q("Programming", "Java", "In Java, which keyword is used to inherit a class?", ["implements", "extends", "inherits", "super"], 1, "'extends' is used for class inheritance in Java."),
    q("Programming", "OOP", "What does OOP's 'encapsulation' mean?", ["Writing loops", "Bundling data and methods, hiding internal details", "Compiling code faster", "Deleting unused variables"], 1, "Encapsulation bundles data with the methods that operate on it and hides internal details."),
    q("Programming", "Data Types", "Which of these is NOT a primitive data type in most languages?", ["int", "boolean", "String", "char"], 2, "String is an object/class type, not a primitive, in languages like Java."),
    q("Programming", "Recursion", "What is a recursive function?", ["A function that never returns", "A function that calls itself", "A function with no parameters", "A function that only runs once"], 1, "Recursion is when a function calls itself to solve smaller sub-problems."),
    q("Programming", "Exceptions", "What does a try/catch block handle?", ["Loops", "Variable declarations", "Runtime errors / exceptions", "Comments"], 2, "try/catch is used to catch and handle runtime exceptions gracefully.")
  ],
  "Core CS": [
    q("Core CS", "DBMS", "What does ACID stand for in databases?", ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Automatic, Concurrent, Indexed, Durable", "Atomic, Complex, Isolated, Data"], 0, "ACID = Atomicity, Consistency, Isolation, Durability \u2014 properties of reliable transactions."),
    q("Core CS", "OS", "What is a deadlock in operating systems?", ["A fast process", "Two or more processes waiting forever for each other's resources", "A type of memory leak", "A network timeout"], 1, "Deadlock occurs when processes wait indefinitely for resources held by each other."),
    q("Core CS", "Networks", "Which OSI layer handles routing?", ["Physical", "Data Link", "Network", "Application"], 2, "The Network layer (Layer 3) is responsible for routing packets between networks."),
    q("Core CS", "DBMS", "What is normalization in DBMS used for?", ["Speeding up the CPU", "Reducing data redundancy", "Encrypting data", "Compressing images"], 1, "Normalization organizes tables to reduce redundant data."),
    q("Core CS", "Networks", "Which protocol is connection-oriented?", ["UDP", "TCP", "IP", "HTTP"], 1, "TCP establishes a connection and guarantees delivery order, unlike UDP.")
  ]
};

// ---------------------------------------------------------
// INTERVIEW CONTENT
// ---------------------------------------------------------
function iq(subject, question) { return { subject, question, answer: "", prepared: false }; }
const INTERVIEW_TECHNICAL_DEFAULT = [
  iq("Java", "What is the difference between JDK, JRE and JVM?"),
  iq("Java", "What is the difference between == and .equals() in Java?"),
  iq("Python", "What is the difference between a list and a tuple in Python?"),
  iq("Python", "What are Python decorators used for?"),
  iq("C++", "What is a pointer and how is it different from a reference?"),
  iq("C++", "What is the difference between stack and heap memory?"),
  iq("DSA", "How would you detect a cycle in a linked list?"),
  iq("DSA", "When would you use a HashMap over an array?"),
  iq("SQL", "What is the difference between DELETE and TRUNCATE?"),
  iq("SQL", "How would you find the second-highest salary in a table?"),
  iq("DBMS", "What is the difference between a primary key and a unique key?"),
  iq("DBMS", "What is denormalization and when would you use it?"),
  iq("OOP", "What is the difference between an abstract class and an interface?"),
  iq("OOP", "Can you explain polymorphism with a real example?"),
  iq("OS", "What is a deadlock and how can it be prevented?"),
  iq("OS", "What is the difference between a process and a thread?"),
  iq("Computer Networks", "What happens when you type a URL into your browser?"),
  iq("Computer Networks", "What's the difference between TCP and UDP?")
];
const INTERVIEW_HR_DEFAULT = [
  "Tell me about yourself", "Strengths", "Weaknesses", "Why should we hire you?", "Why this company?",
  "Career goals", "Explain your projects", "How do you handle teamwork?", "How do you handle conflict?"
].map((q) => ({ q, answer: "", prepared: false }));

// ---------------------------------------------------------
// ROADMAP STAGE DEFINITIONS
// ---------------------------------------------------------
const ROADMAP_STAGES = [
  { id: 1, name: "Programming Fundamentals", section: "programming", what: "Variables, loops, functions, arrays and strings — the building blocks of all programming.",
    why: "Every language and every DSA topic builds on these basics. Skipping this makes everything later much harder.",
    topics: ["Variables", "Conditions", "Loops", "Functions", "Arrays", "Strings"],
    beginner: "Pick one language below (Java, C++ or Python) and start with its Beginner section.", practice: "Complete every Beginner topic for your chosen language." },
  { id: 2, name: "Choose Programming Languages", section: "programming", what: "Decide which language(s) you'll focus on for placements.",
    why: "Most companies accept Java, C++ or Python for DSA rounds — picking one lets you go deep instead of spreading thin.",
    topics: ["Java", "C++", "Python"],
    beginner: "If unsure, Java or Python are the most beginner-friendly and widely accepted.", practice: "Mark this stage complete once you've chosen your main language(s) on the Programming page." },
  { id: 3, name: "Web Development", section: "webdev", what: "HTML, CSS and JavaScript fundamentals, plus small projects.",
    why: "Even for non-web roles, understanding HTML/CSS/JS is expected and useful for building your portfolio.",
    topics: ["HTML", "CSS", "JavaScript", "Mini Projects"],
    beginner: "Start with HTML basic structure, then CSS box model, then JS variables.", practice: "Complete each topic and try building at least one mini-project." },
  { id: 4, name: "SQL", section: "sql", what: "Querying and managing relational databases.",
    why: "SQL rounds are extremely common in placement interviews, especially for product-based companies.",
    topics: ["SELECT/WHERE", "Joins", "GROUP BY/HAVING", "Window Functions"],
    beginner: "Start with SELECT, WHERE and ORDER BY before moving to joins.", practice: "Complete the Beginner topics, then practice on the linked challenges." },
  { id: 5, name: "DSA", section: "dsa", what: "Data Structures and Algorithms — the core of technical interviews.",
    why: "Most coding rounds and technical interviews are DSA-based. This is the single highest-leverage skill to build.",
    topics: ["Arrays", "Strings", "Linked List", "Trees", "Graphs", "Dynamic Programming"],
    beginner: "Start with Arrays and Strings — solve the Easy problems first.", practice: "Aim to solve at least 3-5 problems per topic before moving on." },
  { id: 6, name: "Core CS", section: "corecs", what: "OOP, DBMS, Operating Systems, Computer Networks and Software Engineering basics.",
    why: "Technical interviewers frequently ask concept questions from these subjects, especially for service-based companies.",
    topics: ["OOP", "DBMS", "Operating Systems", "Computer Networks"],
    beginner: "Start with OOP since it connects directly to the programming language you're learning.", practice: "Read each explanation, then try answering the interview question yourself." },
  { id: 7, name: "Aptitude", section: "aptitude", what: "Quantitative, Logical and Verbal reasoning questions.",
    why: "Most placement drives start with an aptitude round before any coding test.", topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability"],
    beginner: "Start with Quantitative — Percentages and Ratios come up constantly.", practice: "Attempt a few questions daily to build speed and accuracy." },
  { id: 8, name: "Communication", section: "communication", what: "Speaking, vocabulary, grammar and group discussion skills.",
    why: "Technical skill alone isn't enough — HR rounds and group discussions test how you communicate.",
    topics: ["Speaking", "Vocabulary", "Grammar", "Group Discussion"],
    beginner: "Start by practicing a 1-minute self-introduction out loud.", practice: "Rate yourself honestly on each skill and revisit weekly." },
  { id: 9, name: "Coding Practice", section: "codingpractice", what: "Consistent, cumulative problem solving across all topics.",
    why: "Interviewers look for consistency — regular practice builds pattern recognition faster than cramming.",
    topics: ["Easy problems", "Medium problems", "Mixed topics"],
    beginner: "Filter by 'Easy' and solve a few from different topics before moving to Medium.", practice: "Try to solve at least one problem a day." },
  { id: 10, name: "Mock Tests", section: "mocktests", what: "Timed-style practice tests across every subject.",
    why: "Mock tests reveal weak areas before the real placement test does.", topics: ["Aptitude", "DSA", "SQL", "Programming", "Core CS", "Mixed"],
    beginner: "Start with a subject you already feel confident in to build momentum.", practice: "Take at least one mock test per week." },
  { id: 11, name: "Technical Interview", section: "interview", what: "Concept questions across Java/Python/C++, DSA, SQL, DBMS, OOP, OS and Networks.",
    why: "This is where most technical rounds actually happen — being able to explain your answer matters as much as knowing it.",
    topics: ["Language questions", "DSA questions", "Core CS questions"],
    beginner: "Read each question, then write your own answer before checking if you'd explain it the same way in an interview.", practice: "Mark each question 'prepared' once you can answer it out loud confidently." },
  { id: 12, name: "HR Interview", section: "interview", what: "Behavioural questions about you, your projects and how you work with others.",
    why: "HR rounds decide whether you're a good fit for the company culture — preparation here is just as important as technical prep.",
    topics: ["Tell me about yourself", "Strengths & Weaknesses", "Teamwork", "Career goals"],
    beginner: "Write out your answers first, then practice saying them naturally rather than reciting.", practice: "Prepare every HR question listed on the Interview Prep page." },
  { id: 13, name: "Placement Ready", section: "analytics", what: "Consistent progress across every stage above.",
    why: "This is the finish line — once every stage is strong, you're ready to sit for placement drives with confidence.",
    topics: ["Everything above, kept sharp with regular practice"],
    beginner: "There's no beginner note here — you've made it. Keep practicing to stay sharp.", practice: "Revisit weak areas shown on the Analytics page." }
];

// ---------------------------------------------------------
// STATE + LOCALSTORAGE
// ---------------------------------------------------------
const KEYS = {
  profile: "placementProfile",
  goals: "placementGoals",
  tasks: "placementTasks",
  activities: "placementActivities",
  mockAttempts: "placementMockAttempts",
  progress: "placementProgress"
};

const DEFAULT_PROFILE = {
  name: "Koushik", email: "dkoushikkoushik@gmail.com", college: "Mohan Babu University",
  branch: "Computer Science Engineering", year: "1st Year", cgpa: "9.71",
  skills: "", targetRole: "Software Engineer", targetCompanies: "TCS, Infosys, Amazon"
};

const DEFAULT_TASKS = [
  { id: 1, text: "Learn Java Arrays", done: false },
  { id: 2, text: "Solve 3 LeetCode problems", done: false },
  { id: 3, text: "Practice SQL JOIN", done: false },
  { id: 4, text: "Attempt 10 aptitude questions", done: false },
  { id: 5, text: "Revise OOP", done: false }
];

const DEFAULT_ACTIVITIES = [
  { text: "Started your Prepwell learning journey", time: "Just now" }
];

const DEFAULT_GOALS = [
  { id: 1, name: "Solve 100 DSA problems", category: "DSA", deadline: "2026-12-01", status: "in-progress", metric: "dsaSolved", target: 100, progress: 0 },
  { id: 2, name: "Complete SQL basics", category: "SQL", deadline: "2026-10-15", status: "in-progress", metric: "sqlTopics", target: 24, progress: 0 },
  { id: 3, name: "Take 10 mock tests", category: "Mock Tests", deadline: "2026-11-01", status: "in-progress", metric: "mockTests", target: 10, progress: 0 },
  { id: 4, name: "Prepare DBMS", category: "Other", deadline: "2026-10-20", status: "not-started", metric: "", target: null, progress: 0 }
];

function freshProgress() {
  return {
    streak: 1,
    chooseLanguagesDone: false,
    programming: JSON.parse(JSON.stringify(PROGRAMMING_CONTENT)),
    webdev: JSON.parse(JSON.stringify(WEBDEV_CONTENT)),
    sql: JSON.parse(JSON.stringify(SQL_CONTENT)),
    corecs: JSON.parse(JSON.stringify(CORECS_CONTENT)),
    dsaSolved: {}, // problemId -> true
    aptitude: { attempted: 0, correct: 0 },
    communication: { skills: [
      { name: "Speaking", progress: 0 }, { name: "Vocabulary", progress: 0 }, { name: "Grammar", progress: 0 },
      { name: "Reading", progress: 0 }, { name: "Listening", progress: 0 }, { name: "Presentation", progress: 0 },
      { name: "Group Discussion", progress: 0 }, { name: "Interview Communication", progress: 0 }
    ]},
    interview: { technical: JSON.parse(JSON.stringify(INTERVIEW_TECHNICAL_DEFAULT)), hr: JSON.parse(JSON.stringify(INTERVIEW_HR_DEFAULT)), notes: "" }
  };
}

function loadSlice(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return JSON.parse(JSON.stringify(fallback));
    return JSON.parse(raw);
  } catch (err) {
    console.error("Could not read " + key, err);
    return JSON.parse(JSON.stringify(fallback));
  }
}

let data = {
  profile: loadSlice(KEYS.profile, DEFAULT_PROFILE),
  goals: loadSlice(KEYS.goals, DEFAULT_GOALS),
  todayTasks: loadSlice(KEYS.tasks, DEFAULT_TASKS),
  recentActivity: loadSlice(KEYS.activities, DEFAULT_ACTIVITIES),
  mockAttempts: loadSlice(KEYS.mockAttempts, []),
  progress: loadSlice(KEYS.progress, freshProgress())
};

function saveData() {
  localStorage.setItem(KEYS.profile, JSON.stringify(data.profile));
  localStorage.setItem(KEYS.goals, JSON.stringify(data.goals));
  localStorage.setItem(KEYS.tasks, JSON.stringify(data.todayTasks));
  localStorage.setItem(KEYS.activities, JSON.stringify(data.recentActivity));
  localStorage.setItem(KEYS.mockAttempts, JSON.stringify(data.mockAttempts));
  localStorage.setItem(KEYS.progress, JSON.stringify(data.progress));
}

function commit() { saveData(); renderAll(); }

function logActivity(text) {
  data.recentActivity.unshift({ text: text, time: "Just now" });
  data.recentActivity = data.recentActivity.slice(0, 8);
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ---------------------------------------------------------
// SMALL HELPERS
// ---------------------------------------------------------
const STATUS_ORDER = ["not-started", "in-progress", "completed"];
const STATUS_LABELS = { "not-started": "Not Started", "in-progress": "In Progress", "completed": "Completed" };
function nextStatus(s) { return STATUS_ORDER[(STATUS_ORDER.indexOf(s) + 1) % 3]; }
function percentFromStatus(s) { return s === "completed" ? 100 : s === "in-progress" ? 50 : 0; }
function average(nums) { return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0; }
function percentFromTopics(list) { return average(list.map((t) => percentFromStatus(t.status))); }
function round(n) { return Math.round(n); }
function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }
function statusPillHTML(status, attrs) { return `<button type="button" class="status-pill status-${status}" ${attrs}>${STATUS_LABELS[status]}</button>`; }
function formatDate(iso) { const d = new Date(iso + "T00:00:00"); if (isNaN(d.getTime())) return iso; return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
function animateTo(el, prop, val) { if (!el) return; requestAnimationFrame(() => requestAnimationFrame(() => { el.style[prop] = val; })); }
function animateBarsIn(sel, percents) { document.querySelectorAll(sel + " [data-bar]").forEach((bar, i) => animateTo(bar, "width", round(percents[i] || 0) + "%")); }
function difficultyBadge(d) { const cls = d === "Easy" ? "badge-easy" : d === "Medium" ? "badge-medium" : "badge-hard"; return `<span class="badge ${cls}">${d}</span>`; }

function allDsaProblems() {
  const list = [];
  DSA_TOPICS.forEach((t) => t.problems.forEach((p) => list.push(p)));
  return list;
}
function isSolved(problemId) { return !!data.progress.dsaSolved[problemId]; }

// ---------------------------------------------------------
// COMPUTED PROGRESS (all real, all derived from `data`)
// ---------------------------------------------------------
function flattenProgTopics() {
  const langs = data.progress.programming;
  let all = [];
  ["java", "cpp", "python"].forEach((l) => { ["beginner", "intermediate", "advanced"].forEach((lvl) => { all = all.concat(langs[l][lvl]); }); });
  return all;
}
function getProgrammingPercent() { return percentFromTopics(flattenProgTopics()); }

function flattenWebdevTopics() {
  const w = data.progress.webdev;
  return [].concat(w.html, w.css, w.js);
}
function getWebdevPercent() { return percentFromTopics(flattenWebdevTopics()); }

function getDsaPercent() {
  const all = allDsaProblems();
  if (!all.length) return 0;
  const solved = all.filter((p) => isSolved(p.id)).length;
  return (solved / all.length) * 100;
}
function getDsaSolvedCount() { return allDsaProblems().filter((p) => isSolved(p.id)).length; }

function flattenSqlTopics() {
  const s = data.progress.sql;
  return [].concat(s.beginner, s.intermediate, s.advanced);
}
function getSqlPercent() { return percentFromTopics(flattenSqlTopics()); }
function getSqlCompletedCount() { return flattenSqlTopics().filter((t) => t.status === "completed").length; }

function flattenCoreCsTopics() {
  const c = data.progress.corecs;
  return [].concat(c.oop, c.dbms, c.os, c.cn, c.se);
}
function getCoreCsPercent() { return percentFromTopics(flattenCoreCsTopics()); }

function getAptitudePercent() { return clamp((data.progress.aptitude.attempted / 50) * 100, 0, 100); }
function getAptitudeAccuracy() { const a = data.progress.aptitude; return a.attempted ? (a.correct / a.attempted) * 100 : 0; }

function getCommunicationPercent() { return average(data.progress.communication.skills.map((s) => s.progress)); }

function getInterviewTechnicalPercent() { const t = data.progress.interview.technical; return t.length ? (t.filter((x) => x.prepared).length / t.length) * 100 : 0; }
function getInterviewHrPercent() { const h = data.progress.interview.hr; return h.length ? (h.filter((x) => x.prepared).length / h.length) * 100 : 0; }
function getInterviewPercent() { return average([getInterviewTechnicalPercent(), getInterviewHrPercent()]); }

function getOverallPercent() {
  return average([
    getProgrammingPercent(), getDsaPercent(), getWebdevPercent(), getSqlPercent(),
    getAptitudePercent(), getCoreCsPercent(), getCommunicationPercent(), getInterviewPercent()
  ]);
}
function getGoalsCompletedCount() { return data.goals.filter((g) => g.status === "completed").length; }

// --- Goal metric values (for auto-linked goals) ---
function metricValue(metric) {
  if (metric === "dsaSolved") return getDsaSolvedCount();
  if (metric === "sqlTopics") return getSqlCompletedCount();
  if (metric === "mockTests") return data.mockAttempts.length;
  if (metric === "aptitudeAttempted") return data.progress.aptitude.attempted;
  return null;
}
function goalProgress(goal) {
  if (goal.metric && goal.target) return clamp((metricValue(goal.metric) / goal.target) * 100, 0, 100);
  return goal.progress;
}

// --- Roadmap stage percent calculations ---
function stagePercent(stageId) {
  switch (stageId) {
    case 1: {
      const beg = [].concat(data.progress.programming.java.beginner, data.progress.programming.cpp.beginner, data.progress.programming.python.beginner);
      return percentFromTopics(beg);
    }
    case 2: return data.progress.chooseLanguagesDone ? 100 : 0;
    case 3: return getWebdevPercent();
    case 4: return getSqlPercent();
    case 5: return getDsaPercent();
    case 6: return getCoreCsPercent();
    case 7: return getAptitudePercent();
    case 8: return getCommunicationPercent();
    case 9: return getDsaPercent();
    case 10: return clamp((data.mockAttempts.length / 5) * 100, 0, 100);
    case 11: return getInterviewTechnicalPercent();
    case 12: return getInterviewHrPercent();
    case 13: return average([1,2,3,4,5,6,7,8,9,10,11,12].map(stagePercent));
    default: return 0;
  }
}

function getCurrentStage() {
  for (let i = 0; i < ROADMAP_STAGES.length - 1; i++) {
    if (round(stagePercent(ROADMAP_STAGES[i].id)) < 100) return ROADMAP_STAGES[i];
  }
  return ROADMAP_STAGES[ROADMAP_STAGES.length - 1];
}

function firstIncompleteTopicName(stageId) {
  if (stageId === 1) { const t = flattenProgTopics().find((x) => x.status !== "completed"); return t ? t.name : null; }
  if (stageId === 3) { const t = flattenWebdevTopics().find((x) => x.status !== "completed"); return t ? t.name : null; }
  if (stageId === 4) { const t = flattenSqlTopics().find((x) => x.status !== "completed"); return t ? t.name : null; }
  if (stageId === 5) { const p = allDsaProblems().find((p) => !isSolved(p.id)); return p ? (p.topic + " \u2192 " + p.title) : null; }
  if (stageId === 6) { const t = flattenCoreCsTopics().find((x) => x.status !== "completed"); return t ? t.name : null; }
  return null;
}

// ---------------------------------------------------------
// PATH RESOLVER (for generic "mark complete" status pills)
// ---------------------------------------------------------
function getByPath(path) {
  const parts = path.split(".");
  let obj = data.progress;
  for (const p of parts) obj = obj[isNaN(p) ? p : Number(p)];
  return obj;
}
function escapeHtml(str) { return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

// ---------------------------------------------------------
// GENERIC LEARN/PRACTICE TOPIC CARD RENDERER
// ---------------------------------------------------------
function renderTopicCards(containerId, topics, pathPrefix) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = topics.map((t, i) => {
    const path = pathPrefix + "." + i;
    let extra = "";
    if (t.example) extra += `<h5>Example</h5><pre class="code-example">${escapeHtml(t.example)}</pre>`;
    if (t.practice) extra += `<h5>Practice</h5><p>${t.practice}</p>`;
    if (t.practiceUrl) extra += `<h5>Practice</h5><p><a href="${t.practiceUrl}" target="_blank" rel="noopener" class="btn-secondary" style="display:inline-block;text-decoration:none;">Practice this on a real site \u2197</a>${t.problemsSolved !== undefined ? ` &nbsp; <input type="number" min="0" value="${t.problemsSolved}" data-sql-problems="${path}" style="width:55px;padding:0.3rem 0.4rem;border:1px solid var(--line);border-radius:6px;background:var(--cream);text-align:center;"> <span style="font-size:0.78rem;color:var(--ink-soft);">problems solved</span>` : ""}</p>`;
    if (t.interviewQ) extra += `<h5>Interview Question</h5><p>${t.interviewQ}</p>`;
    return `<details class="topic-learn-card"><summary><h4>${t.name}</h4>${statusPillHTML(t.status, `data-topic-path="${path}"`)}</summary><div class="topic-learn-body"><h5>What is it?</h5><p>${t.explain}</p>${extra}</div></details>`;
  }).join("");
}

function renderProjectCards(containerId, projects, pathPrefix) {
  document.getElementById(containerId).innerHTML = `
    <div class="card-grid three-col">
      ${projects.map((p, i) => `
        <article class="track-card">
          <h3 style="margin-bottom:0.4rem;">${p.name}</h3>
          <p class="track-meta">${p.description}</p>
          ${statusPillHTML(p.status, `data-topic-path="${pathPrefix}.${i}"`)}
        </article>
      `).join("")}
    </div>
  `;
}

// ---------------------------------------------------------
// DASHBOARD
// ---------------------------------------------------------
function iconSvg(inner) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${inner}</svg>`; }
const ICONS = {
  fire: iconSvg(`<path d="M12 22c4-1 6-4 6-8 0-3-2-5-3-7 0 2-1 3-2 3 0-3-1-5-3-7-1 4-4 6-4 11 0 4 2 7 6 8Z" stroke-linejoin="round"/>`),
  code: iconSvg(`<path d="M8 4 3 12l5 8M16 4l5 8-5 8" stroke-linecap="round" stroke-linejoin="round"/>`),
  db: iconSvg(`<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke-linecap="round"/>`),
  target: iconSvg(`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>`),
  check: iconSvg(`<path d="M5 12l5 5L19 7" stroke-linecap="round" stroke-linejoin="round"/>`),
  flag: iconSvg(`<path d="M5 21V4" stroke-linecap="round"/><path d="M5 4h13l-3 4 3 4H5" stroke-linejoin="round"/>`)
};

function renderDashboard() {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
  document.getElementById("greeting").textContent = `Good ${timeOfDay}, ${data.profile.name}`;

  const overall = getOverallPercent();
  animateTo(document.getElementById("overallRing"), "strokeDashoffset", 540.35 - (overall / 100) * 540.35);
  document.getElementById("overallPercent").textContent = round(overall) + "%";

  const stage = getCurrentStage();
  const nextTopic = firstIncompleteTopicName(stage.id);
  document.getElementById("continueLearningText").textContent = nextTopic ? `${stage.name} \u2192 ${nextTopic}` : stage.name;

  const cards = [
    { icon: ICONS.code, value: getDsaSolvedCount(), label: "Problems Solved" },
    { icon: ICONS.db, value: getSqlCompletedCount(), label: "SQL Topics Completed" },
    { icon: ICONS.target, value: data.progress.aptitude.attempted, label: "Aptitude Qs Attempted" },
    { icon: ICONS.check, value: data.mockAttempts.length, label: "Mock Tests Completed" },
    { icon: ICONS.flag, value: getGoalsCompletedCount(), label: "Goals Completed" },
    { icon: ICONS.fire, value: data.progress.streak, label: "Current Streak (days)" }
  ];
  document.getElementById("dashboardStatCards").innerHTML = cards.map((c) => `
    <div class="stat-card"><span class="stat-icon">${c.icon}</span><div><div class="stat-value">${c.value}</div><div class="stat-label">${c.label}</div></div></div>
  `).join("");

  const doneToday = data.todayTasks.filter((t) => t.done).length;
  document.getElementById("todayTasksCount").textContent = `${doneToday} of ${data.todayTasks.length} done`;
  document.getElementById("todayTasksList").innerHTML = data.todayTasks.length ? data.todayTasks.map((t) => `
    <li class="goal-item ${t.done ? "done" : ""}"><label><input type="checkbox" data-today-task="${t.id}" ${t.done ? "checked" : ""}><span class="goal-check"></span><span class="goal-text">${t.text}</span></label></li>
  `).join("") : `<p class="empty-note">No tasks yet — add one below.</p>`;

  const progAreas = [
    { label: "Programming", percent: getProgrammingPercent() }, { label: "DSA", percent: getDsaPercent() },
    { label: "SQL", percent: getSqlPercent() }, { label: "Aptitude", percent: getAptitudePercent() },
    { label: "Core CS", percent: getCoreCsPercent() }, { label: "Web Development", percent: getWebdevPercent() },
    { label: "Communication", percent: getCommunicationPercent() }, { label: "Interview", percent: getInterviewPercent() }
  ];
  document.getElementById("dashboardProgressBars").innerHTML = progAreas.map((a) => `
    <li class="mini-progress-item"><div class="mini-progress-row"><span>${a.label}</span><span>${round(a.percent)}%</span></div><div class="bar-track"><div class="bar-fill" data-bar></div></div></li>
  `).join("");
  animateBarsIn("#dashboardProgressBars", progAreas.map((a) => a.percent));

  const recentTests = [...data.mockAttempts].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-5);
  const chartEl = document.getElementById("dashboardScoreChart");
  if (!recentTests.length) { chartEl.innerHTML = `<p class="empty-note">No mock tests yet. Take one from the Mock Tests page.</p>`; }
  else {
    chartEl.innerHTML = recentTests.map((t) => `<div class="score-bar-col"><div class="score-bar" data-score-bar data-pct="${t.percentage}"><span class="score-value">${t.percentage}</span></div><span class="score-label">${t.category}</span></div>`).join("");
    chartEl.querySelectorAll("[data-score-bar]").forEach((bar) => animateTo(bar, "height", bar.dataset.pct + "%"));
  }

  document.getElementById("recentActivityList").innerHTML = data.recentActivity.length
    ? data.recentActivity.map((a) => `<li><span>${a.text}</span><span class="activity-time">${a.time}</span></li>`).join("")
    : `<li class="empty-note">No recent activity yet.</li>`;
}

// ---------------------------------------------------------
// ROADMAP
// ---------------------------------------------------------
function renderRoadmap() {
  document.getElementById("roadmapList").innerHTML = ROADMAP_STAGES.map((stage) => {
    const pct = round(stagePercent(stage.id));
    const complete = pct >= 100;
    const stage2Toggle = stage.id === 2 ? `<div style="margin-top:0.8rem;">${statusPillHTML(data.progress.chooseLanguagesDone ? "completed" : "not-started", `data-stage2-toggle="1"`)}</div>` : "";
    return `
      <details class="roadmap-stage ${complete ? "stage-complete" : ""}">
        <summary>
          <div class="roadmap-stage-title"><span class="roadmap-stage-num">${complete ? "\u2713" : stage.id}</span><h3>Stage ${stage.id} \u2014 ${stage.name}</h3></div>
          <div class="roadmap-stage-meta"><div class="roadmap-mini-bar bar-track"><div class="bar-fill" data-bar></div></div><span class="panel-note">${pct}%</span></div>
        </summary>
        <div class="roadmap-body">
          <h4>What to learn</h4><p>${stage.what}</p>
          <h4>Why it matters</h4><p>${stage.why}</p>
          <h4>Topics</h4><div class="topic-chip-row">${stage.topics.map((t) => `<span class="topic-chip">${t}</span>`).join("")}</div>
          <h4>For beginners</h4><p>${stage.beginner}</p>
          <h4>Practice</h4><p>${stage.practice}</p>
          ${stage2Toggle}
          <div style="margin-top:1rem;"><button class="btn-primary" data-nav="${stage.section}">Go to ${stage.name}</button></div>
        </div>
      </details>
    `;
  }).join("");
  animateBarsIn("#roadmapList", ROADMAP_STAGES.map((s) => stagePercent(s.id)));
}

// ---------------------------------------------------------
// PROGRAMMING
// ---------------------------------------------------------
let currentProgLang = "java";
function renderProgramming() {
  const langs = [["java", "Java"], ["cpp", "C++"], ["python", "Python"]];
  document.getElementById("programmingLangTabs").innerHTML = langs.map(([key, label]) =>
    `<button class="lang-tab ${currentProgLang === key ? "active" : ""}" data-prog-lang="${key}">${label}</button>`
  ).join("");

  const levels = [["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]];
  const content = levels.map(([lvlKey, lvlLabel]) => {
    const topics = data.progress.programming[currentProgLang][lvlKey];
    const pct = round(percentFromTopics(topics));
    return `<div class="level-block"><h3>${lvlLabel} <span class="panel-note">${pct}% complete</span></h3><div id="progList-${lvlKey}"></div></div>`;
  }).join("");
  document.getElementById("programmingContent").innerHTML = content;
  levels.forEach(([lvlKey]) => renderTopicCards(`progList-${lvlKey}`, data.progress.programming[currentProgLang][lvlKey], `programming.${currentProgLang}.${lvlKey}`));
}

// ---------------------------------------------------------
// WEB DEVELOPMENT
// ---------------------------------------------------------
let currentWebdevTab = "html";
function renderWebdev() {
  const tabs = [["html", "HTML"], ["css", "CSS"], ["js", "JavaScript"], ["projects", "Mini Projects"]];
  document.getElementById("webdevTabs").innerHTML = tabs.map(([key, label]) =>
    `<button class="lang-tab ${currentWebdevTab === key ? "active" : ""}" data-webdev-tab="${key}">${label}</button>`
  ).join("");
  if (currentWebdevTab === "projects") {
    document.getElementById("webdevContent").innerHTML = `<div id="webdevProjects"></div>`;
    renderProjectCards("webdevProjects", data.progress.webdev.projects, "webdev.projects");
  } else {
    document.getElementById("webdevContent").innerHTML = `<div id="webdevTopics"></div>`;
    renderTopicCards("webdevTopics", data.progress.webdev[currentWebdevTab], `webdev.${currentWebdevTab}`);
  }
}

// ---------------------------------------------------------
// SQL
// ---------------------------------------------------------
function renderSql() {
  const overall = getSqlPercent();
  document.getElementById("sqlOverallLabel").textContent = round(overall) + "%";
  animateTo(document.getElementById("sqlOverallBar"), "width", round(overall) + "%");

  const levels = [["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]];
  document.getElementById("sqlContent").innerHTML = levels.map(([key, label]) => {
    const pct = round(percentFromTopics(data.progress.sql[key]));
    return `<div class="level-block"><h3>${label} <span class="panel-note">${pct}% complete</span></h3><div id="sqlList-${key}"></div></div>`;
  }).join("");
  levels.forEach(([key]) => renderTopicCards(`sqlList-${key}`, data.progress.sql[key], `sql.${key}`));
}

// ---------------------------------------------------------
// CORE CS
// ---------------------------------------------------------
let currentCoreCsTab = "oop";
function renderCoreCs() {
  const tabs = [["oop", "OOP"], ["dbms", "DBMS"], ["os", "Operating Systems"], ["cn", "Computer Networks"], ["se", "Software Engineering"]];
  document.getElementById("corecsTabs").innerHTML = tabs.map(([key, label]) =>
    `<button class="lang-tab ${currentCoreCsTab === key ? "active" : ""}" data-corecs-tab="${key}">${label}</button>`
  ).join("");
  document.getElementById("corecsContent").innerHTML = `<div id="corecsTopics"></div>`;
  renderTopicCards("corecsTopics", data.progress.corecs[currentCoreCsTab], `corecs.${currentCoreCsTab}`);
}

// ---------------------------------------------------------
// DSA TRACKER
// ---------------------------------------------------------
const dsaFilters = { search: "", difficulty: "all", solved: "all" };
function matchesDsaFilters(p) {
  if (dsaFilters.search && !p.title.toLowerCase().includes(dsaFilters.search.toLowerCase()) && !p.topic.toLowerCase().includes(dsaFilters.search.toLowerCase())) return false;
  if (dsaFilters.difficulty !== "all" && p.difficulty !== dsaFilters.difficulty) return false;
  if (dsaFilters.solved === "solved" && !isSolved(p.id)) return false;
  if (dsaFilters.solved === "unsolved" && isSolved(p.id)) return false;
  return true;
}
function renderProblemRow(p) {
  const solved = isSolved(p.id);
  return `
    <div class="problem-row ${solved ? "solved" : ""}">
      <span class="problem-title">${p.title}</span>
      <span class="problem-tags">${difficultyBadge(p.difficulty)}<span class="badge badge-platform">${p.platform}</span></span>
      <span class="problem-actions">
        <a href="${p.url}" target="_blank" rel="noopener" class="btn-secondary" style="text-decoration:none;">Solve \u2197</a>
        <button class="btn-primary" data-toggle-solved="${p.id}">${solved ? "Solved \u2713" : "Mark Solved"}</button>
      </span>
    </div>
  `;
}
function renderDsa() {
  const overall = getDsaPercent();
  document.getElementById("dsaOverallLabel").textContent = round(overall) + "%";
  animateTo(document.getElementById("dsaOverallBar"), "width", round(overall) + "%");

  const all = allDsaProblems();
  const solvedCount = all.filter((p) => isSolved(p.id)).length;
  const byDiff = (d) => all.filter((p) => p.difficulty === d);
  const solvedByDiff = (d) => byDiff(d).filter((p) => isSolved(p.id)).length;
  document.getElementById("dsaStatCards").innerHTML = [
    { label: "Solved", value: `${solvedCount} / ${all.length}` },
    { label: "Easy", value: `${solvedByDiff("Easy")} / ${byDiff("Easy").length}` },
    { label: "Medium", value: `${solvedByDiff("Medium")} / ${byDiff("Medium").length}` },
    { label: "Hard", value: `${solvedByDiff("Hard")} / ${byDiff("Hard").length}` }
  ].map((s) => `<div class="stat-card"><div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div></div>`).join("");

  document.getElementById("dsaDifficultyFilter").innerHTML = ["all", "Easy", "Medium", "Hard"].map((d) =>
    `<button class="filter-chip ${dsaFilters.difficulty === d ? "active" : ""}" data-dsa-diff-filter="${d}">${d === "all" ? "All" : d}</button>`
  ).join("");
  document.getElementById("dsaSolvedFilter").innerHTML = ["all", "solved", "unsolved"].map((s) =>
    `<button class="filter-chip ${dsaFilters.solved === s ? "active" : ""}" data-dsa-solved-filter="${s}">${s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}</button>`
  ).join("");

  const html = DSA_TOPICS.map((topic) => {
    const visible = topic.problems.filter(matchesDsaFilters);
    if (!visible.length) return "";
    const topicSolved = topic.problems.filter((p) => isSolved(p.id)).length;
    return `
      <div class="panel" style="margin-bottom:1rem;">
        <div class="topic-progress-head"><h3>${topic.name}</h3><span class="panel-note">${topicSolved} / ${topic.problems.length} solved</span></div>
        <div class="bar-track" style="margin-bottom:0.9rem;"><div class="bar-fill" style="width:${round((topicSolved / topic.problems.length) * 100)}%"></div></div>
        <div class="problem-list">${visible.map(renderProblemRow).join("")}</div>
      </div>
    `;
  }).join("");
  document.getElementById("dsaTopicsList").innerHTML = html || `<p class="empty-note">No problems match your search/filters.</p>`;
}

// ---------------------------------------------------------
// CODING PRACTICE (reuses the same DSA problem data)
// ---------------------------------------------------------
const cpFilters = { search: "", topic: "all", difficulty: "all", platform: "all" };
function renderCodingPractice() {
  const topicSelect = document.getElementById("cpTopicFilter");
  if (!topicSelect.dataset.filled) {
    topicSelect.innerHTML = `<option value="all">All topics</option>` + DSA_TOPICS.map((t) => `<option value="${t.name}">${t.name}</option>`).join("");
    topicSelect.dataset.filled = "1";
  }
  const platformSelect = document.getElementById("cpPlatformFilter");
  if (!platformSelect.dataset.filled) {
    const platforms = [...new Set(allDsaProblems().map((p) => p.platform))];
    platformSelect.innerHTML = `<option value="all">All platforms</option>` + platforms.map((p) => `<option value="${p}">${p}</option>`).join("");
    platformSelect.dataset.filled = "1";
  }

  const all = allDsaProblems().filter((p) => {
    if (cpFilters.search && !p.title.toLowerCase().includes(cpFilters.search.toLowerCase())) return false;
    if (cpFilters.topic !== "all" && p.topic !== cpFilters.topic) return false;
    if (cpFilters.difficulty !== "all" && p.difficulty !== cpFilters.difficulty) return false;
    if (cpFilters.platform !== "all" && p.platform !== cpFilters.platform) return false;
    return true;
  });
  document.getElementById("cpProblemList").innerHTML = all.length ? all.map(renderProblemRow).join("") : `<p class="empty-note">No problems match your filters.</p>`;
}

// ---------------------------------------------------------
// QUIZ ENGINE (shared by Aptitude practice + Mock Tests)
// ---------------------------------------------------------
let activeQuiz = null; // { mode: 'aptitude'|'mock', category, questions, index, selected, answered, correctCount, finished }

function startQuiz(mode, category, questions) {
  activeQuiz = { mode, category, questions, index: 0, selected: null, answered: false, correctCount: 0, finished: false };
  renderActiveQuiz();
}

function renderActiveQuiz() {
  const aptEl = document.getElementById("aptitudeQuizArea");
  const mockEl = document.getElementById("mockQuizArea");
  if (!activeQuiz) { aptEl.innerHTML = ""; mockEl.innerHTML = ""; return; }
  const el = activeQuiz.mode === "aptitude" ? aptEl : mockEl;
  const other = activeQuiz.mode === "aptitude" ? mockEl : aptEl;
  other.innerHTML = "";

  if (activeQuiz.index >= activeQuiz.questions.length) {
    const total = activeQuiz.questions.length;
    const correct = activeQuiz.correctCount;
    el.innerHTML = `
      <div class="quiz-box quiz-result">
        <div class="quiz-progress-label">${activeQuiz.category} \u2014 Result</div>
        <div class="big-score">${round((correct / total) * 100)}%</div>
        <p>${correct} correct out of ${total}</p>
        <button class="btn-primary" data-quiz-restart="1">Back to categories</button>
      </div>
    `;
    return;
  }

  const question = activeQuiz.questions[activeQuiz.index];
  el.innerHTML = `
    <div class="quiz-box">
      <div class="quiz-progress-label">Question ${activeQuiz.index + 1} of ${activeQuiz.questions.length} \u2014 ${question.topic || question.category}</div>
      <div class="quiz-question">${question.question}</div>
      <div class="quiz-options">
        ${question.options.map((opt, i) => {
          let cls = "quiz-option";
          if (activeQuiz.answered) { if (i === question.correct) cls += " correct"; else if (i === activeQuiz.selected) cls += " incorrect"; }
          else if (i === activeQuiz.selected) cls += " selected";
          return `<button type="button" class="${cls}" data-quiz-option="${i}" ${activeQuiz.answered ? "disabled" : ""}>${opt}</button>`;
        }).join("")}
      </div>
      ${activeQuiz.answered ? `<div class="quiz-feedback ${activeQuiz.selected === question.correct ? "correct" : "incorrect"}">${activeQuiz.selected === question.correct ? "Correct! " : "Incorrect. Correct answer: " + question.options[question.correct] + ". "}${question.explanation}</div>` : ""}
      <div class="quiz-nav">
        <button class="btn-secondary" data-quiz-exit="1">Exit</button>
        ${!activeQuiz.answered
          ? `<button class="btn-primary" data-quiz-submit="1" ${activeQuiz.selected === null ? "disabled" : ""}>Submit Answer</button>`
          : `<button class="btn-primary" data-quiz-next="1">${activeQuiz.index + 1 < activeQuiz.questions.length ? "Next Question" : "Finish"}</button>`}
      </div>
    </div>
  `;
}

function finishQuiz() {
  const total = activeQuiz.questions.length;
  const correct = activeQuiz.correctCount;
  const pct = round((correct / total) * 100);
  if (activeQuiz.mode === "aptitude") {
    data.progress.aptitude.attempted += total;
    data.progress.aptitude.correct += correct;
    logActivity(`Completed an aptitude quiz (${activeQuiz.category}) \u2014 ${pct}%`);
    showToast("Quiz completed");
    saveData();
    renderAptitude();
  } else {
    data.mockAttempts.push({ id: Date.now(), category: activeQuiz.category, date: new Date().toISOString().slice(0, 10), score: correct, total: total, percentage: pct });
    logActivity(`Completed a mock test (${activeQuiz.category}) \u2014 ${pct}%`);
    showToast("Mock test saved");
    saveData();
    renderMockTests();
  }
  renderTopbar();
}

document.addEventListener("click", function (e) {
  const optBtn = e.target.closest("[data-quiz-option]");
  if (optBtn && activeQuiz && !activeQuiz.answered) { activeQuiz.selected = Number(optBtn.dataset.quizOption); renderActiveQuiz(); return; }

  if (e.target.closest("[data-quiz-submit]")) {
    if (!activeQuiz || activeQuiz.selected === null) return;
    activeQuiz.answered = true;
    const question = activeQuiz.questions[activeQuiz.index];
    if (activeQuiz.selected === question.correct) activeQuiz.correctCount++;
    renderActiveQuiz();
    return;
  }

  if (e.target.closest("[data-quiz-next]")) {
    if (!activeQuiz) return;
    activeQuiz.index++;
    activeQuiz.selected = null;
    activeQuiz.answered = false;
    if (activeQuiz.index >= activeQuiz.questions.length && !activeQuiz.finished) { activeQuiz.finished = true; finishQuiz(); }
    renderActiveQuiz();
    return;
  }

  if (e.target.closest("[data-quiz-exit]") || e.target.closest("[data-quiz-restart]")) { activeQuiz = null; renderActiveQuiz(); return; }

  const startApt = e.target.closest("[data-start-aptitude]");
  if (startApt) {
    const cat = startApt.dataset.startAptitude;
    const qs = cat === "all" ? APTITUDE_BANK.slice() : APTITUDE_BANK.filter((q) => q.category === cat);
    startQuiz("aptitude", cat === "all" ? "Mixed" : cat, qs);
    return;
  }

  const startMock = e.target.closest("[data-start-mock]");
  if (startMock) {
    const cat = startMock.dataset.startMock;
    let qs;
    if (cat === "Aptitude") qs = APTITUDE_BANK.slice();
    else if (cat === "Mixed") qs = [].concat(MOCK_BANKS.DSA.slice(0, 2), MOCK_BANKS.SQL.slice(0, 2), MOCK_BANKS.Programming.slice(0, 2), MOCK_BANKS["Core CS"].slice(0, 2), APTITUDE_BANK.slice(0, 2));
    else qs = MOCK_BANKS[cat].slice();
    startQuiz("mock", cat, qs);
  }
});

// ---------------------------------------------------------
// APTITUDE PAGE
// ---------------------------------------------------------
function renderAptitude() {
  const a = data.progress.aptitude;
  document.getElementById("aptitudeStatsRow").innerHTML = `
    <div class="quiz-stat"><strong>${a.attempted}</strong> attempted</div>
    <div class="quiz-stat"><strong>${a.correct}</strong> correct</div>
    <div class="quiz-stat"><strong>${round(getAptitudeAccuracy())}%</strong> accuracy</div>
  `;
  const cats = [["Quantitative", "Quantitative Aptitude"], ["Logical", "Logical Reasoning"], ["Verbal", "Verbal Ability"], ["all", "All Categories (Mixed)"]];
  document.getElementById("aptitudeCategoryGrid").innerHTML = cats.map(([key, label]) => `
    <article class="track-card"><h3 style="margin-bottom:0.6rem;">${label}</h3><button class="btn-primary" data-start-aptitude="${key}">Start Quiz</button></article>
  `).join("");
}

// ---------------------------------------------------------
// MOCK TESTS PAGE
// ---------------------------------------------------------
function renderMockTests() {
  const cats = ["Aptitude", "DSA", "SQL", "Programming", "Core CS", "Mixed"];
  document.getElementById("mockCategoryGrid").innerHTML = cats.map((c) => `
    <article class="track-card"><h3 style="margin-bottom:0.6rem;">${c}</h3><button class="btn-primary" data-start-mock="${c}">Start Test</button></article>
  `).join("");
  const attempts = [...data.mockAttempts].sort((a, b) => new Date(b.date) - new Date(a.date));
  document.getElementById("mockAttemptsBody").innerHTML = attempts.length ? attempts.map((a) => `
    <tr><td>${a.category}</td><td>${formatDate(a.date)}</td><td>${a.score} / ${a.total}</td><td>${a.percentage}%</td></tr>
  `).join("") : `<tr><td colspan="4"><p class="empty-note">No attempts yet \u2014 start a test above.</p></td></tr>`;
}

// ---------------------------------------------------------
// INTERVIEW PREPARATION
// ---------------------------------------------------------
let interviewTechFilter = "";
function pillInterview(prepared, kind, idx) {
  return `<button type="button" class="status-pill ${prepared ? "status-completed" : "status-not-started"}" data-interview-toggle="${kind}:${idx}">${prepared ? "Prepared \u2713" : "Mark Prepared"}</button>`;
}
function renderInterview() {
  const tech = data.progress.interview.technical;
  const hr = data.progress.interview.hr;
  const techPct = round(getInterviewTechnicalPercent());
  const hrPct = round(getInterviewHrPercent());
  document.getElementById("interviewOverviewCards").innerHTML = `
    <article class="track-card"><h3>Technical Interview</h3><p class="track-meta">${techPct}% prepared</p><div class="bar-track"><div class="bar-fill" style="width:${techPct}%"></div></div></article>
    <article class="track-card"><h3>HR Interview</h3><p class="track-meta">${hrPct}% prepared</p><div class="bar-track"><div class="bar-fill" style="width:${hrPct}%"></div></div></article>
    <article class="track-card"><h3>Coding Interview</h3><p class="track-meta">Practice on the DSA page</p><button class="btn-secondary" data-nav="dsa">Go to DSA</button></article>
  `;

  const visibleTech = tech.map((t, i) => ({ t, i })).filter(({ t }) => !interviewTechFilter || t.subject.toLowerCase().includes(interviewTechFilter.toLowerCase()));
  document.getElementById("interviewTechnicalList").innerHTML = visibleTech.length ? visibleTech.map(({ t, i }) => `
    <div class="qa-card">
      <div class="qa-card-head"><span class="qa-subject">${t.subject}</span>${pillInterview(t.prepared, "tech", i)}</div>
      <p>${t.question}</p>
      <textarea data-interview-answer="tech:${i}" rows="2" placeholder="Write your own answer...">${escapeHtml(t.answer)}</textarea>
    </div>
  `).join("") : `<p class="empty-note">No questions match that filter.</p>`;

  document.getElementById("interviewHrList").innerHTML = hr.map((h, i) => `
    <div class="qa-card">
      <div class="qa-card-head"><span class="qa-subject">HR</span>${pillInterview(h.prepared, "hr", i)}</div>
      <p>${h.q}</p>
      <textarea data-interview-answer="hr:${i}" rows="2" placeholder="Write your own answer...">${escapeHtml(h.answer)}</textarea>
    </div>
  `).join("");

  const notesEl = document.getElementById("interviewNotes");
  if (document.activeElement !== notesEl) notesEl.value = data.progress.interview.notes;
}

document.addEventListener("click", function (e) {
  const btn = e.target.closest("[data-interview-toggle]");
  if (!btn) return;
  const [kind, idxStr] = btn.dataset.interviewToggle.split(":");
  const idx = Number(idxStr);
  const item = kind === "tech" ? data.progress.interview.technical[idx] : data.progress.interview.hr[idx];
  item.prepared = !item.prepared;
  saveData();
  btn.textContent = item.prepared ? "Prepared \u2713" : "Mark Prepared";
  btn.classList.toggle("status-completed", item.prepared);
  btn.classList.toggle("status-not-started", !item.prepared);
  showToast(item.prepared ? "Marked prepared" : "Progress updated");
  renderTopbar();
});

document.addEventListener("blur", function (e) {
  const ta = e.target.closest("[data-interview-answer]");
  if (ta) {
    const [kind, idxStr] = ta.dataset.interviewAnswer.split(":");
    const idx = Number(idxStr);
    const item = kind === "tech" ? data.progress.interview.technical[idx] : data.progress.interview.hr[idx];
    item.answer = ta.value;
    saveData();
    return;
  }
  if (e.target.id === "interviewNotes") { data.progress.interview.notes = e.target.value; saveData(); }
}, true);

// ---------------------------------------------------------
// COMMUNICATION
// ---------------------------------------------------------
function renderCommunication() {
  document.getElementById("communicationList").innerHTML = data.progress.communication.skills.map((s, i) => {
    const status = s.progress === 0 ? "not-started" : s.progress >= 100 ? "completed" : "in-progress";
    return `
      <article class="track-card">
        <div class="track-card-top"><h3>${s.name}</h3>${statusPillHTML(status, "")}</div>
        <p class="track-meta"><span data-slider-value>${s.progress}%</span></p>
        <input type="range" min="0" max="100" value="${s.progress}" data-comm-slider="${i}">
        <div class="bar-track"><div class="bar-fill" data-bar></div></div>
      </article>
    `;
  }).join("");
  animateBarsIn("#communicationList", data.progress.communication.skills.map((s) => s.progress));
}
document.addEventListener("input", function (e) {
  const slider = e.target.closest("[data-comm-slider]");
  if (!slider) return;
  const card = slider.closest(".track-card");
  const label = card.querySelector("[data-slider-value]");
  const bar = card.querySelector("[data-bar]");
  if (label) label.textContent = slider.value + "%";
  if (bar) bar.style.width = slider.value + "%";
});
document.addEventListener("change", function (e) {
  const slider = e.target.closest("[data-comm-slider]");
  if (!slider) return;
  data.progress.communication.skills[Number(slider.dataset.commSlider)].progress = Number(slider.value);
  showToast("Progress updated");
  commit();
});

// ---------------------------------------------------------
// GOALS
// ---------------------------------------------------------
function renderGoals() {
  document.getElementById("goalsList").innerHTML = data.goals.length ? data.goals.map((g) => {
    const isLinked = !!g.metric;
    const pct = round(goalProgress(g));
    if (isLinked) g.status = pct >= 100 ? "completed" : pct > 0 ? "in-progress" : "not-started";
    return `
      <article class="goal-card">
        <div class="goal-card-top">
          <h3>${g.name}</h3>
          <span class="row-actions">
            <button class="icon-btn" data-edit-goal="${g.id}" aria-label="Edit goal">${ICONS.code}</button>
            <button class="icon-btn" data-delete-goal="${g.id}" aria-label="Delete goal">${iconSvg('<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" stroke-linecap="round" stroke-linejoin="round"/>')}</button>
          </span>
        </div>
        <p class="goal-card-meta">${g.category} &middot; Due ${formatDate(g.deadline)}${isLinked ? " &middot; auto-tracked" : ""}</p>
        ${statusPillHTML(g.status, isLinked ? "" : `data-goal-status="${g.id}"`)}
        <div class="bar-track"><div class="bar-fill" data-bar></div></div>
        <div class="goal-progress-row"><span>Progress</span><span>${pct}%</span></div>
        ${isLinked ? `<p class="panel-note">${metricValue(g.metric)} / ${g.target}</p>` : `<input type="range" min="0" max="100" value="${g.progress}" data-goal-slider="${g.id}">`}
      </article>
    `;
  }).join("") : `<p class="empty-note">No goals yet \u2014 click "Add Goal" to create one.</p>`;
  animateBarsIn("#goalsList", data.goals.map((g) => goalProgress(g)));
}

function setupGoalModal() {
  document.getElementById("addGoalBtn").addEventListener("click", function () {
    document.getElementById("goalForm").reset();
    document.getElementById("goalEditId").value = "";
    document.getElementById("goalModalTitle").textContent = "Add goal";
    document.getElementById("goalSubmitBtn").textContent = "Add goal";
    document.getElementById("goalTargetWrap").hidden = true;
    openModal("goalModal");
  });
  document.getElementById("goalMetric").addEventListener("change", function () { document.getElementById("goalTargetWrap").hidden = !this.value; });

  document.getElementById("goalForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const editId = document.getElementById("goalEditId").value;
    const name = document.getElementById("goalName").value.trim();
    const category = document.getElementById("goalCategory").value;
    const deadline = document.getElementById("goalDeadline").value;
    const metric = document.getElementById("goalMetric").value;
    const target = metric ? Number(document.getElementById("goalTarget").value) : null;
    const status = document.getElementById("goalStatus").value;
    if (!name || !deadline) return;

    if (editId) {
      const goal = data.goals.find((g) => g.id === Number(editId));
      Object.assign(goal, { name, category, deadline, metric, target, status: metric ? goal.status : status, progress: metric ? goal.progress : percentFromStatus(status) });
      showToast("Goal updated");
    } else {
      data.goals.push({ id: Date.now(), name, category, deadline, metric, target, status: metric ? "in-progress" : status, progress: metric ? 0 : percentFromStatus(status) });
      logActivity(`Added goal: "${name}"`);
      showToast("Goal added");
    }
    closeModal("goalModal");
    commit();
  });
}
document.addEventListener("click", function (e) {
  const editBtn = e.target.closest("[data-edit-goal]");
  if (editBtn) {
    const goal = data.goals.find((g) => g.id === Number(editBtn.dataset.editGoal));
    if (!goal) return;
    document.getElementById("goalEditId").value = goal.id;
    document.getElementById("goalName").value = goal.name;
    document.getElementById("goalCategory").value = goal.category;
    document.getElementById("goalDeadline").value = goal.deadline;
    document.getElementById("goalMetric").value = goal.metric || "";
    document.getElementById("goalTarget").value = goal.target || 100;
    document.getElementById("goalTargetWrap").hidden = !goal.metric;
    document.getElementById("goalStatus").value = goal.status;
    document.getElementById("goalModalTitle").textContent = "Edit goal";
    document.getElementById("goalSubmitBtn").textContent = "Save changes";
    openModal("goalModal");
    return;
  }
  const delBtn = e.target.closest("[data-delete-goal]");
  if (delBtn) { data.goals = data.goals.filter((g) => g.id !== Number(delBtn.dataset.deleteGoal)); showToast("Goal deleted"); commit(); return; }

  const statusBtn = e.target.closest("[data-goal-status]");
  if (statusBtn) {
    const goal = data.goals.find((g) => g.id === Number(statusBtn.dataset.goalStatus));
    goal.status = nextStatus(goal.status);
    goal.progress = percentFromStatus(goal.status);
    showToast("Progress updated");
    commit();
  }
});
document.addEventListener("input", function (e) {
  const slider = e.target.closest("[data-goal-slider]");
  if (!slider) return;
  const card = slider.closest(".goal-card");
  const bar = card.querySelector("[data-bar]");
  const label = card.querySelector(".goal-progress-row span:last-child");
  if (bar) bar.style.width = slider.value + "%";
  if (label) label.textContent = slider.value + "%";
});
document.addEventListener("change", function (e) {
  const slider = e.target.closest("[data-goal-slider]");
  if (!slider) return;
  const goal = data.goals.find((g) => g.id === Number(slider.dataset.goalSlider));
  goal.progress = Number(slider.value);
  goal.status = goal.progress === 100 ? "completed" : goal.progress === 0 ? "not-started" : "in-progress";
  showToast("Progress updated");
  commit();
});

// ---------------------------------------------------------
// ANALYTICS
// ---------------------------------------------------------
function renderAnalytics() {
  const overall = getOverallPercent();
  document.getElementById("analyticsOverallPercent").textContent = round(overall) + "%";
  document.getElementById("analyticsRingPercent").textContent = round(overall) + "%";
  animateTo(document.getElementById("analyticsRing"), "strokeDashoffset", 540.35 - (overall / 100) * 540.35);

  const areas = [
    { label: "Programming", percent: getProgrammingPercent() }, { label: "DSA", percent: getDsaPercent() },
    { label: "SQL", percent: getSqlPercent() }, { label: "Aptitude (practice volume)", percent: getAptitudePercent() },
    { label: "Core CS", percent: getCoreCsPercent() }, { label: "Web Development", percent: getWebdevPercent() },
    { label: "Communication", percent: getCommunicationPercent() }, { label: "Interview Prep", percent: getInterviewPercent() }
  ];
  document.getElementById("analyticsSkillBars").innerHTML = areas.map((a) => `
    <li class="mini-progress-item"><div class="mini-progress-row"><span>${a.label}</span><span>${round(a.percent)}%</span></div><div class="bar-track"><div class="bar-fill" data-bar></div></div></li>
  `).join("");
  animateBarsIn("#analyticsSkillBars", areas.map((a) => a.percent));

  const summary = [
    { label: "DSA problems solved", value: `${getDsaSolvedCount()} / ${allDsaProblems().length}` },
    { label: "SQL topics completed", value: `${getSqlCompletedCount()} / ${flattenSqlTopics().length}` },
    { label: "Aptitude accuracy", value: `${round(getAptitudeAccuracy())}% (${data.progress.aptitude.correct}/${data.progress.aptitude.attempted})` },
    { label: "Mock tests taken", value: `${data.mockAttempts.length}` },
    { label: "Goals completed", value: `${getGoalsCompletedCount()} / ${data.goals.length}` }
  ];
  document.getElementById("analyticsActivitySummary").innerHTML = summary.map((s) => `
    <li class="mini-progress-item"><div class="mini-progress-row"><span>${s.label}</span><span>${s.value}</span></div></li>
  `).join("");
}

// ---------------------------------------------------------
// PROFILE
// ---------------------------------------------------------
function renderProfile() {
  const p = data.profile;
  const fields = [
    ["Student Name", p.name], ["Email", p.email], ["College", p.college], ["Branch", p.branch],
    ["Year", p.year], ["CGPA", p.cgpa], ["Skills", p.skills], ["Target Role", p.targetRole], ["Target Companies", p.targetCompanies]
  ];
  document.getElementById("profileView").innerHTML = fields.map(([label, value]) => `
    <div class="profile-field"><div class="field-label">${label}</div><div class="field-value">${value || "\u2014"}</div></div>
  `).join("");
}
function setupProfileForm() {
  const editBtn = document.getElementById("profileEditBtn");
  const cancelBtn = document.getElementById("profileCancelBtn");
  const form = document.getElementById("profileForm");
  const view = document.getElementById("profileView");

  editBtn.addEventListener("click", function () {
    const p = data.profile;
    document.getElementById("profileName").value = p.name;
    document.getElementById("profileEmail").value = p.email;
    document.getElementById("profileCollege").value = p.college;
    document.getElementById("profileBranch").value = p.branch;
    document.getElementById("profileYear").value = p.year;
    document.getElementById("profileCgpa").value = p.cgpa;
    document.getElementById("profileSkills").value = p.skills;
    document.getElementById("profileTargetRole").value = p.targetRole;
    document.getElementById("profileTargetCompanies").value = p.targetCompanies;
    view.hidden = true; form.hidden = false; editBtn.hidden = true;
  });
  function closeEditMode() { form.hidden = true; view.hidden = false; editBtn.hidden = false; }
  cancelBtn.addEventListener("click", closeEditMode);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    data.profile = {
      name: document.getElementById("profileName").value.trim(), email: document.getElementById("profileEmail").value.trim(),
      college: document.getElementById("profileCollege").value.trim(), branch: document.getElementById("profileBranch").value.trim(),
      year: document.getElementById("profileYear").value.trim(), cgpa: document.getElementById("profileCgpa").value.trim(),
      skills: document.getElementById("profileSkills").value.trim(), targetRole: document.getElementById("profileTargetRole").value.trim(),
      targetCompanies: document.getElementById("profileTargetCompanies").value.trim()
    };
    logActivity("Updated profile details");
    showToast("Profile updated");
    closeEditMode();
    commit();
  });
}

// ---------------------------------------------------------
// TOPBAR + RENDER ALL
// ---------------------------------------------------------
function renderTopbar() {
  document.getElementById("topbarOverallPercent").textContent = round(getOverallPercent()) + "%";
  document.getElementById("topbarAvatar").textContent = (data.profile.name || "?").charAt(0).toUpperCase();
}
function renderAll() {
  renderDashboard(); renderRoadmap(); renderProgramming(); renderWebdev(); renderSql();
  renderAptitude(); renderCoreCs(); renderCodingPractice(); renderMockTests(); renderInterview();
  renderCommunication(); renderGoals(); renderAnalytics(); renderProfile(); renderTopbar();
}

// ---------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------
const SECTION_TITLES = {
  dashboard: "Dashboard", roadmap: "Learning Roadmap", programming: "Programming", dsa: "DSA",
  webdev: "Web Development", sql: "SQL", aptitude: "Aptitude", corecs: "Core CS",
  codingpractice: "Coding Practice", mocktests: "Mock Tests", interview: "Interview Preparation",
  communication: "Communication", goals: "Goals", analytics: "Analytics", profile: "Profile"
};
function showSection(name) {
  document.querySelectorAll(".page-section").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById("section-" + name);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-item").forEach((btn) => btn.classList.toggle("active", btn.dataset.nav === name));
  document.getElementById("topbarTitle").textContent = SECTION_TITLES[name] || "";
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarBackdrop").classList.remove("open");
  document.querySelector(".content-scroll").scrollTo(0, 0);
}
document.addEventListener("click", function (e) {
  const navTarget = e.target.closest("[data-nav]");
  if (navTarget) { e.preventDefault(); showSection(navTarget.dataset.nav); }
});
function setupContinueLearningButton() {
  const btn = document.getElementById("continueLearningBtn");
  if (btn) btn.addEventListener("click", function () { showSection(getCurrentStage().section); });
}

function setupMobileNav() {
  const toggleButton = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  toggleButton.addEventListener("click", function () {
    const isOpen = sidebar.classList.toggle("open");
    backdrop.classList.toggle("open", isOpen);
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  backdrop.addEventListener("click", function () { sidebar.classList.remove("open"); backdrop.classList.remove("open"); });
}

function openModal(id) { document.getElementById(id).hidden = false; }
function closeModal(id) { document.getElementById(id).hidden = true; }
document.addEventListener("click", function (e) {
  const closeBtn = e.target.closest("[data-close-modal]");
  if (closeBtn) closeModal(closeBtn.dataset.closeModal);
  if (e.target.classList.contains("modal-overlay")) e.target.hidden = true;
});

// ---------------------------------------------------------
// TODAY'S TASKS (add + toggle)
// ---------------------------------------------------------
function addTaskHandler() {
  const input = document.getElementById("newTaskInput");
  const text = input.value.trim();
  if (!text) return;
  data.todayTasks.push({ id: Date.now(), text, done: false });
  input.value = "";
  showToast("Task added");
  commit();
}
function setupAddTask() {
  document.getElementById("addTaskBtn").addEventListener("click", addTaskHandler);
  document.getElementById("newTaskInput").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); addTaskHandler(); } });
}
document.addEventListener("change", function (e) {
  const box = e.target.closest("[data-today-task]");
  if (!box) return;
  const task = data.todayTasks.find((t) => t.id === Number(box.dataset.todayTask));
  task.done = box.checked;
  if (task.done) { logActivity(`Completed task: "${task.text}"`); showToast("Task completed"); }
  commit();
});

// ---------------------------------------------------------
// GENERIC "MARK COMPLETE" STATUS PILLS + TABS + FILTERS
// ---------------------------------------------------------
document.addEventListener("click", function (e) {
  const topicPill = e.target.closest("[data-topic-path]");
  if (topicPill) {
    const topic = getByPath(topicPill.dataset.topicPath);
    topic.status = nextStatus(topic.status);
    if (topic.status === "completed") { logActivity(`Completed: ${topic.name}`); showToast("Marked complete"); } else { showToast("Progress updated"); }
    commit();
    return;
  }
  const langTab = e.target.closest("[data-prog-lang]");
  if (langTab) { currentProgLang = langTab.dataset.progLang; renderProgramming(); return; }
  const webdevTab = e.target.closest("[data-webdev-tab]");
  if (webdevTab) { currentWebdevTab = webdevTab.dataset.webdevTab; renderWebdev(); return; }
  const corecsTab = e.target.closest("[data-corecs-tab]");
  if (corecsTab) { currentCoreCsTab = corecsTab.dataset.corecsTab; renderCoreCs(); return; }
  const stage2 = e.target.closest("[data-stage2-toggle]");
  if (stage2) { data.progress.chooseLanguagesDone = !data.progress.chooseLanguagesDone; showToast("Progress updated"); commit(); return; }
  const diffFilter = e.target.closest("[data-dsa-diff-filter]");
  if (diffFilter) { dsaFilters.difficulty = diffFilter.dataset.dsaDiffFilter; renderDsa(); return; }
  const solvedFilter = e.target.closest("[data-dsa-solved-filter]");
  if (solvedFilter) { dsaFilters.solved = solvedFilter.dataset.dsaSolvedFilter; renderDsa(); return; }
  const toggleSolved = e.target.closest("[data-toggle-solved]");
  if (toggleSolved) {
    const id = Number(toggleSolved.dataset.toggleSolved);
    const wasSolved = isSolved(id);
    data.progress.dsaSolved[id] = !wasSolved;
    if (!wasSolved) { const p = allDsaProblems().find((p) => p.id === id); logActivity(`Solved: ${p.title}`); showToast("Marked solved"); }
    else showToast("Marked unsolved");
    commit();
  }
});

document.addEventListener("change", function (e) {
  const input = e.target.closest("[data-sql-problems]");
  if (!input) return;
  const topic = getByPath(input.dataset.sqlProblems);
  topic.problemsSolved = Number(input.value) || 0;
  commit();
});

function setupFilters() {
  document.getElementById("dsaSearch").addEventListener("input", function () { dsaFilters.search = this.value; renderDsa(); });
  document.getElementById("cpSearch").addEventListener("input", function () { cpFilters.search = this.value; renderCodingPractice(); });
  document.getElementById("cpTopicFilter").addEventListener("change", function () { cpFilters.topic = this.value; renderCodingPractice(); });
  document.getElementById("cpDifficultyFilter").addEventListener("change", function () { cpFilters.difficulty = this.value; renderCodingPractice(); });
  document.getElementById("cpPlatformFilter").addEventListener("change", function () { cpFilters.platform = this.value; renderCodingPractice(); });
  document.getElementById("techQFilter").addEventListener("input", function () { interviewTechFilter = this.value; renderInterview(); });
}

// ---------------------------------------------------------
// INIT
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  try {
    renderAll();
    setupMobileNav();
    setupGoalModal();
    setupProfileForm();
    setupFilters();
    setupAddTask();
    setupContinueLearningButton();
  } catch (err) {
    console.error("Prepwell failed to start:", err);
  }
});
