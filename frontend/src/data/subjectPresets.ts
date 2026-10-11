export interface TopicItem {
  id: string;
  title: string;
  category?: 'theory' | 'practical' | 'module';
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface ChapterItem {
  id: string;
  number: number;
  title: string;
  category?: 'theory' | 'practical' | 'module';
  topics: TopicItem[];
}

export const DSA_CHAPTERS: ChapterItem[] = [
  {
    id: 'ch-dsa-1',
    number: 1,
    title: 'Introduction to Data Structures & Algorithm Analysis',
    category: 'theory',
    topics: [
      { id: 't-dsa-1-1', title: 'Concepts of Data and Information, Abstract Data Type (ADT) & Data Types [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-1-2', title: 'Classification: Primitive vs Non-Primitive, Linear vs Non-Linear Data Structures [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-1-3', title: 'Need of Data Structures, Concept of Algorithms and Programs [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-1-4', title: 'Different methods of representing algorithms & Algorithm Analysis [1L]', category: 'theory', status: 'in-progress' },
      { id: 't-dsa-1-5', title: 'Time and space analysis of algorithms – Asymptotic notations (Big O, Small o, Ω, ω, Θ) [2L]', category: 'theory', status: 'not-started' },
    ],
  },
  {
    id: 'ch-dsa-2',
    number: 2,
    title: 'Non-Restricted Linear Data Structure (Arrays & Linked Lists)',
    category: 'theory',
    topics: [
      { id: 't-dsa-2-1', title: 'List or Linear List: Definition, Examples & List as ADT [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-2-2', title: 'Array Sequential Representation & Linearization of multidimensional arrays [2L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-2-3', title: 'Application of arrays: Polynomial representation & Sparse Matrix using array [2L]', category: 'theory', status: 'in-progress' },
      { id: 't-dsa-2-4', title: 'Linked List: Introduction to linked representation & Singly Linked List implementation [2L]', category: 'theory', status: 'in-progress' },
      { id: 't-dsa-2-5', title: 'Doubly Linked List, Circular Linked List & Circular Doubly Linked List operations [2L]', category: 'theory', status: 'not-started' },
    ],
  },
  {
    id: 'ch-dsa-3',
    number: 3,
    title: 'Restricted Linear Data Structure (Stacks & Queues)',
    category: 'practical',
    topics: [
      { id: 't-dsa-3-1', title: 'Stack: Definition & implementations using array and linked list [1L]', category: 'practical', status: 'completed' },
      { id: 't-dsa-3-2', title: 'Applications of Stack: Infix to postfix conversion & Postfix evaluation [2L]', category: 'practical', status: 'completed' },
      { id: 't-dsa-3-3', title: 'Principles of Recursion: Use of stack, tail recursion, Tower of Hanoi [1L]', category: 'practical', status: 'in-progress' },
      { id: 't-dsa-3-4', title: 'Queue: Implementation using array (physical, linear, circular model) & linked list [1L]', category: 'practical', status: 'in-progress' },
      { id: 't-dsa-3-5', title: 'Double-Ended Queue (Deque): Definition and different variations [1L]', category: 'practical', status: 'not-started' },
    ],
  },
  {
    id: 'ch-dsa-4',
    number: 4,
    title: 'Nonlinear Data Structures (Trees & Binary Trees)',
    category: 'theory',
    topics: [
      { id: 't-dsa-4-1', title: 'Trees and Binary Tree: Basic terminologies, definitions & differences [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-4-2', title: 'Representation of Binary Tree using arrays and linked lists [1L]', category: 'theory', status: 'completed' },
      { id: 't-dsa-4-3', title: 'Binary Tree Traversals (Pre-, In-, Post-order, Level-Order) [2L]', category: 'theory', status: 'in-progress' },
      { id: 't-dsa-4-4', title: 'Threaded Binary Tree: Definition, insertion and deletion algorithms [1L]', category: 'theory', status: 'not-started' },
      { id: 't-dsa-4-5', title: 'Binary Search Tree (BST): Definition, insertion, deletion and search algorithms [2L]', category: 'theory', status: 'not-started' },
      { id: 't-dsa-4-6', title: 'Height Balanced Binary Tree: AVL Tree definition, rotations, insertion and deletion [1L]', category: 'theory', status: 'not-started' },
      { id: 't-dsa-4-7', title: 'm-Way Search Trees: B-Tree & B+ Tree definition, insertion and deletion [1L]', category: 'theory', status: 'not-started' },
    ],
  },
  {
    id: 'ch-dsa-5',
    number: 5,
    title: 'Sorting, Searching & Hashing',
    category: 'practical',
    topics: [
      { id: 't-dsa-5-1', title: 'Searching: Linear Search and Binary Search algorithms with analysis [1L]', category: 'practical', status: 'completed' },
      { id: 't-dsa-5-2', title: 'Sorting: Bubble Sort, Selection Sort and Insertion Sort [2L]', category: 'practical', status: 'completed' },
      { id: 't-dsa-5-3', title: 'Divide & Conquer: Merge Sort and Quick Sort with complexity analysis [2L]', category: 'practical', status: 'in-progress' },
      { id: 't-dsa-5-4', title: 'Heap Sort and Radix Sort implementation [1L]', category: 'practical', status: 'not-started' },
      { id: 't-dsa-5-5', title: 'Hashing: Hash functions, collision resolution (chaining, open addressing, probing) [2L]', category: 'practical', status: 'not-started' },
    ],
  },
];

export const SUBJECT_PRESETS: Record<string, ChapterItem[]> = {
  'Data structure and Algorithms': DSA_CHAPTERS,
  'Data Structures': DSA_CHAPTERS,
  'DSA': DSA_CHAPTERS,

  'Computer Architecture': [
    {
      id: 'ca-1',
      number: 1,
      title: 'Introduction to CPU, ALU & Computer Arithmetic',
      category: 'theory',
      topics: [
        { id: 'ca-1-1', title: 'Introduction to CPU and concepts of ALU [2L]', category: 'theory', status: 'completed' },
        { id: 'ca-1-2', title: 'Instruction format and Instruction Cycle [1L]', category: 'theory', status: 'completed' },
        { id: 'ca-1-3', title: 'Addressing Modes [1L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-1-4', title: "Fixed-point multiplication - Booth's algorithm [2L]", category: 'theory', status: 'in-progress' },
        { id: 'ca-1-5', title: 'Fixed-point division - Restoring and non-restoring algorithms [1L]', category: 'theory', status: 'not-started' },
        { id: 'ca-1-6', title: 'Floating-point number representation (IEEE 754 format) & arithmetic operations [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ca-2',
      number: 2,
      title: 'Basic Computer Architecture & Control Unit',
      category: 'theory',
      topics: [
        { id: 'ca-2-1', title: 'Introduction to basic computer architecture [1L]', category: 'theory', status: 'completed' },
        { id: 'ca-2-2', title: 'Stored Program Concepts: Von Neumann & Harvard Architecture [1L]', category: 'theory', status: 'completed' },
        { id: 'ca-2-3', title: 'RISC vs CISC Architecture [1L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-2-4', title: "Amdahl's Law [1L]", category: 'theory', status: 'in-progress' },
        { id: 'ca-2-5', title: 'Performance measurement parameters – MIPS, MFLOPS, SPEC ratings, CPI [2L]', category: 'theory', status: 'not-started' },
        { id: 'ca-2-6', title: 'Microprogrammed and Hardwired Control Unit [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ca-3',
      number: 3,
      title: 'Memory Hierarchy & Cache Mapping',
      category: 'theory',
      topics: [
        { id: 'ca-3-1', title: 'Introduction to memory - RAM and ROM [1L]', category: 'theory', status: 'completed' },
        { id: 'ca-3-2', title: 'Register transfer, memory transfer & Tri-state bus buffer', category: 'theory', status: 'completed' },
        { id: 'ca-3-3', title: 'Memory Hierarchy: Secondary memory, Main Memory & Cache Memory [1L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-3-4', title: 'Mapping Technique in cache memory: Direct, Full Associative and Set Associative [2L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-3-5', title: 'Performance Implementation in Cache Memory [1L]', category: 'theory', status: 'not-started' },
        { id: 'ca-3-6', title: 'Virtual memory Concepts & Page replacement policies [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ca-4',
      number: 4,
      title: 'Pipelining & Instruction-Level Parallelism',
      category: 'theory',
      topics: [
        { id: 'ca-4-1', title: 'Pipelining: Basic concepts, instruction and arithmetic pipeline [2L]', category: 'theory', status: 'completed' },
        { id: 'ca-4-2', title: 'Data hazards, control hazards, structural hazards & handling techniques [2L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-4-3', title: 'Pipeline vs. Parallelism & Levels of parallelism [1L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-4-4', title: 'Instruction-Level Parallelism: Basic Concepts & Techniques for Increasing ILP [2L]', category: 'theory', status: 'not-started' },
        { id: 'ca-4-5', title: 'Superscalar, Super Pipelined and VLIW Processor Architectures [2L]', category: 'theory', status: 'not-started' },
        { id: 'ca-4-6', title: 'Array and Vector Processors [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ca-5',
      number: 5,
      title: 'Multiprocessor Architecture & Interconnection Networks',
      category: 'theory',
      topics: [
        { id: 'ca-5-1', title: 'Multiprocessor architecture: taxonomy of parallel architectures & Flynn Classification [1L]', category: 'theory', status: 'completed' },
        { id: 'ca-5-2', title: 'Centralized and Shared-memory architecture: synchronization [1L]', category: 'theory', status: 'in-progress' },
        { id: 'ca-5-3', title: 'Interconnection Networks: Omega, Baseline, Butterfly, Crossbar [2L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Operating Systems': [
    {
      id: 'os-1',
      number: 1,
      title: 'Concepts of Operating System & Services',
      category: 'theory',
      topics: [
        { id: 'os-1-1', title: 'Concepts of Operating System & Evolution of Operating System [1L]', category: 'theory', status: 'completed' },
        { id: 'os-1-2', title: 'Types of Operating Systems (Batch, Multiprogrammed, Time-sharing, Distributed) [1L]', category: 'theory', status: 'completed' },
        { id: 'os-1-3', title: 'Structural overview of Operating Systems [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-1-4', title: 'Operating system services & System Calls [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'os-2',
      number: 2,
      title: 'Processes, Threads & CPU Scheduling',
      category: 'theory',
      topics: [
        { id: 'os-2-1', title: 'Concept of processes, transition of process states & Process Control Block (PCB) [2L]', category: 'theory', status: 'completed' },
        { id: 'os-2-2', title: 'Process scheduling, co-operating processes, independent process, suspended process [1L]', category: 'theory', status: 'completed' },
        { id: 'os-2-3', title: 'Threads: overview, benefits of threads, user and kernel level threads [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-2-4', title: 'CPU scheduling: Scheduling criteria, preemptive & non-preemptive scheduling [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-2-5', title: 'Scheduling algorithms (FCFS, SJF, SRTF, RR, priority, multilevel queue & feedback queue) [2L]', category: 'theory', status: 'not-started' },
        { id: 'os-2-6', title: 'Real Time scheduling: Rate Monotonic (RM) and Earliest Deadline First (EDF) [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'os-3',
      number: 3,
      title: 'Inter-process Communication & Synchronization',
      category: 'theory',
      topics: [
        { id: 'os-3-1', title: 'Inter-process Communication: background & critical section problem [2L]', category: 'theory', status: 'completed' },
        { id: 'os-3-2', title: "Synchronization hardware & Peterson's Solution [1L]", category: 'theory', status: 'in-progress' },
        { id: 'os-3-3', title: 'The Producer Consumer Problem & Semaphores [2L]', category: 'theory', status: 'in-progress' },
        { id: 'os-3-4', title: "Classical Problems of synchronization: Reader's & Writer Problem, Dining Philosopher Problem [2L]", category: 'theory', status: 'not-started' },
        { id: 'os-3-5', title: 'Monitors and high-level synchronization constructs [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'os-4',
      number: 4,
      title: 'Deadlocks: Prevention, Avoidance & Recovery',
      category: 'theory',
      topics: [
        { id: 'os-4-1', title: 'Deadlocks: Definition, Necessary and sufficient condition for deadlock [1L]', category: 'theory', status: 'completed' },
        { id: 'os-4-2', title: 'Methods for handling deadlocks: deadlock prevention [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-4-3', title: "Deadlock avoidance: Banker's algorithm [1L]", category: 'theory', status: 'not-started' },
        { id: 'os-4-4', title: 'Deadlock detection and recovery from deadlock [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'os-5',
      number: 5,
      title: 'Memory Management & Virtual Memory',
      category: 'theory',
      topics: [
        { id: 'os-5-1', title: 'Background, logical vs. physical address space, swapping, contiguous memory allocation [2L]', category: 'theory', status: 'completed' },
        { id: 'os-5-2', title: 'Paging, Segmentation and Translation Lookaside Buffer (TLB) [2L]', category: 'theory', status: 'in-progress' },
        { id: 'os-5-3', title: 'Virtual Memory: background & demand paging [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-5-4', title: 'Page replacement algorithms (FCFS, LRU, Optimal) [1L]', category: 'theory', status: 'not-started' },
        { id: 'os-5-5', title: 'Thrashing and Working Set Model [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'os-6',
      number: 6,
      title: 'Storage, Disk Management & File Systems',
      category: 'theory',
      topics: [
        { id: 'os-6-1', title: 'I/O Hardware: I/O devices, polling, interrupts, DMA, caching, buffering, blocking/non-blocking [2L]', category: 'theory', status: 'completed' },
        { id: 'os-6-2', title: 'Disk structure & disk scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK) [1L]', category: 'theory', status: 'in-progress' },
        { id: 'os-6-3', title: 'Disk reliability, disk formatting, boot block, bad blocks [1L]', category: 'theory', status: 'not-started' },
        { id: 'os-6-4', title: 'File: File concept, access methods, directory structure, file system structure [1L]', category: 'theory', status: 'not-started' },
        { id: 'os-6-5', title: 'UNIX file structure & allocation methods (contiguous, linked, indexed) [1L]', category: 'theory', status: 'not-started' },
        { id: 'os-6-6', title: 'Free-space management (bit vector) [1L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Design and Analysis of Algorithms': [
    {
      id: 'daa-1',
      number: 1,
      title: 'Algorithm Development & Complexity Analysis',
      category: 'theory',
      topics: [
        { id: 'daa-1-1', title: 'Stages of algorithm development for solving problems: Describing, technique identification & design [2L]', category: 'theory', status: 'completed' },
        { id: 'daa-1-2', title: 'Time and Space Complexity, Different Asymptotic notations – their mathematical significance [2L]', category: 'theory', status: 'completed' },
        { id: 'daa-1-3', title: 'Solving Recurrences: Substitution Method & Recurrence Tree Method [1L]', category: 'theory', status: 'in-progress' },
        { id: 'daa-1-4', title: 'Master Theorem (Statement and Applications) [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'daa-2',
      number: 2,
      title: 'Algorithm Design Techniques',
      category: 'theory',
      topics: [
        { id: 'daa-2-1', title: 'Brute force techniques – Traveling Salesman Problem (TSP) [2L]', category: 'theory', status: 'completed' },
        { id: 'daa-2-2', title: 'Divide and Conquer: Matrix multiplication (Strassen algorithm) [3L]', category: 'theory', status: 'completed' },
        { id: 'daa-2-3', title: 'Greedy techniques: Fractional Knapsack problem [2L]', category: 'theory', status: 'in-progress' },
        { id: 'daa-2-4', title: 'Job Sequencing with Deadline & Graph Coloring [3L]', category: 'theory', status: 'not-started' },
        { id: 'daa-2-5', title: "Finding Minimum Cost Spanning Trees (Prim's & Kruskal's Algorithms) [2L]", category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'daa-3',
      number: 3,
      title: 'String Matching Algorithms',
      category: 'theory',
      topics: [
        { id: 'daa-3-1', title: 'String matching problem: Different techniques – Naive algorithm with complexity [1L]', category: 'theory', status: 'completed' },
        { id: 'daa-3-2', title: 'Knuth, Morris, Pratt (KMP) algorithm with complexity analysis [2L]', category: 'theory', status: 'in-progress' },
      ],
    },
    {
      id: 'daa-4',
      number: 4,
      title: 'Graph Algorithms & Network Flows',
      category: 'theory',
      topics: [
        { id: 'daa-4-1', title: "Single Source Shortest Path: Dijkstra's Algorithm & Bellman-Ford Algorithm [2L]", category: 'theory', status: 'completed' },
        { id: 'daa-4-2', title: 'All pair shortest path – Floyd-Warshall Algorithm [1L]', category: 'theory', status: 'in-progress' },
        { id: 'daa-4-3', title: 'Network Flows, Maximum Flows – Ford-Fulkerson Algorithm [1L]', category: 'theory', status: 'not-started' },
        { id: 'daa-4-4', title: 'Push Re-label Algorithm [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'daa-5',
      number: 5,
      title: 'Complexity Classes & NP-Completeness',
      category: 'theory',
      topics: [
        { id: 'daa-5-1', title: 'Complexity Classes: The Class P and The Class NP [2L]', category: 'theory', status: 'completed' },
        { id: 'daa-5-2', title: 'Reducibility and NP-completeness – SAT (without proof) & 3-SAT [3L]', category: 'theory', status: 'in-progress' },
        { id: 'daa-5-3', title: 'Vertex Cover, Independent Set & Maximum Clique Problems [2L]', category: 'theory', status: 'not-started' },
        { id: 'daa-5-4', title: 'Clique Decision problem and reduction of NP completeness [1L]', category: 'theory', status: 'not-started' },
        { id: 'daa-5-5', title: 'Overview of Approximation and Randomized Algorithms, Recent Trends [2L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Advanced Artificial Intelligence': [
    {
      id: 'aai-1',
      number: 1,
      title: 'Basics of AI & Intelligent Agents',
      category: 'theory',
      topics: [
        { id: 'aai-1-1', title: 'Overview of Artificial Intelligence – Problems of AI, AI technique, Tic-Tac-Toe problem [2L]', category: 'theory', status: 'completed' },
        { id: 'aai-1-2', title: 'Intelligent Agents: Agents & environment, nature of environment, structure of agents [2L]', category: 'theory', status: 'completed' },
        { id: 'aai-1-3', title: 'Goal-based agents, utility based agents, learning agents [1L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-1-4', title: 'Learning: Forms of learning, inductive learning, learning decision trees, explanation based learning [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'aai-2',
      number: 2,
      title: 'Different Types of Searching Algorithms',
      category: 'theory',
      topics: [
        { id: 'aai-2-1', title: 'Problem Solving: Problems, Problem Space & search (Defining problem as state space search) [3L]', category: 'theory', status: 'completed' },
        { id: 'aai-2-2', title: 'Production systems & Issues in the design of search programs [3L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-2-3', title: 'Constraint satisfaction problems & Heuristics [3L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-2-4', title: 'Informed vs Uninformed Search Techniques [3L]', category: 'theory', status: 'not-started' },
        { id: 'aai-2-5', title: 'Adversarial Search & Game Playing [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'aai-3',
      number: 3,
      title: 'Knowledge & Reasoning',
      category: 'theory',
      topics: [
        { id: 'aai-3-1', title: 'Knowledge representation issues, representation & mapping, approaches to knowledge representation [2L]', category: 'theory', status: 'completed' },
        { id: 'aai-3-2', title: 'Using predicate logic: Simple facts, instant & ISA relationship, computable functions & predicates [3L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-3-3', title: 'Resolution refutation and natural deduction [2L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-3-4', title: 'Representing knowledge using rules: Procedural vs declarative, forward vs backward reasoning, matching [3L]', category: 'theory', status: 'not-started' },
        { id: 'aai-3-5', title: 'Probabilistic reasoning: Representing knowledge in uncertain domains, semantics [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'aai-4',
      number: 4,
      title: 'Different Fields of AI & Python Implementations',
      category: 'theory',
      topics: [
        { id: 'aai-4-1', title: 'Natural Language Processing: Syntactic processing, semantic analysis [1L]', category: 'theory', status: 'completed' },
        { id: 'aai-4-2', title: 'Discourse and pragmatic processing in NLP [1L]', category: 'theory', status: 'in-progress' },
        { id: 'aai-4-3', title: 'Expert Systems: Representing and using domain knowledge, expert system shells, knowledge acquisition [1L]', category: 'theory', status: 'not-started' },
        { id: 'aai-4-4', title: 'Basic knowledge of programming language like Python for AI applications [1L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Introduction to Artificial Intelligence': [
    {
      id: 'iai-1',
      number: 1,
      title: 'Introduction to Artificial Intelligence',
      category: 'theory',
      topics: [
        { id: 'iai-1-1', title: 'Why AI, Definition of AI, Goals of AI & History and evolution of AI [1L]', category: 'theory', status: 'completed' },
        { id: 'iai-1-2', title: 'Types of AI: Narrow AI, General AI & Super AI [1L]', category: 'theory', status: 'completed' },
        { id: 'iai-1-3', title: 'Turing Test & Current state of AI systems [1L]', category: 'theory', status: 'in-progress' },
      ],
    },
    {
      id: 'iai-2',
      number: 2,
      title: 'Intelligent Agents and Logic-Based Thinking',
      category: 'theory',
      topics: [
        { id: 'iai-2-1', title: 'Intelligent systems, Agents and environments [2L]', category: 'theory', status: 'completed' },
        { id: 'iai-2-2', title: 'Decision making using rules and logic [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iai-2-3', title: 'Symbolic AI & Expert Systems Architecture [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iai-2-4', title: 'Agent architectures: Reactive, Model-based, Goal-based and Utility-based [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iai-3',
      number: 3,
      title: 'Overview of AI Branches and Perception',
      category: 'theory',
      topics: [
        { id: 'iai-3-1', title: 'Machine learning and deep learning foundations [2L]', category: 'theory', status: 'completed' },
        { id: 'iai-3-2', title: 'Natural language processing & Speech recognition [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iai-3-3', title: 'Computer vision and image understanding [2L]', category: 'theory', status: 'not-started' },
        { id: 'iai-3-4', title: 'Robotics, Sensors & Autonomous Navigation [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iai-4',
      number: 4,
      title: 'Basics of Machine Learning',
      category: 'theory',
      topics: [
        { id: 'iai-4-1', title: 'What is machine learning: AI vs ML [2L]', category: 'theory', status: 'completed' },
        { id: 'iai-4-2', title: 'Types of learning: supervised, unsupervised & reinforcement learning [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iai-4-3', title: 'Concept of dataset: Training, Validation and Test data [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iai-5',
      number: 5,
      title: 'Applications and Ethics of AI',
      category: 'theory',
      topics: [
        { id: 'iai-5-1', title: 'AI in robotics and automation [1L]', category: 'theory', status: 'completed' },
        { id: 'iai-5-2', title: 'AI-enabled smart applications: Healthcare, Agriculture, Industry 4.0 [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iai-5-3', title: 'Ethics in AI: Bias, Fairness, Transparency, Privacy and Safety [2L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Internet of Things': [
    {
      id: 'iot-1',
      number: 1,
      title: 'Fundamentals of IoT',
      category: 'theory',
      topics: [
        { id: 'iot-1-1', title: 'The Internet of Things, Time for Convergence, Towards the IoT Universe [2L]', category: 'theory', status: 'completed' },
        { id: 'iot-1-2', title: 'Internet of Things Vision, IoT Strategic Research and Innovation Directions [2L]', category: 'theory', status: 'completed' },
        { id: 'iot-1-3', title: 'IoT Applications, Future Internet Technologies, Infrastructure [1L]', category: 'theory', status: 'in-progress' },
        { id: 'iot-1-4', title: 'Networks and Communication, Design challenges, Development challenges, Security challenges [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iot-2',
      number: 2,
      title: 'Wireless Sensor Network & Communication Aspects',
      category: 'theory',
      topics: [
        { id: 'iot-2-1', title: 'Wireless Sensor Network (WSN) Architecture & Communication aspects [2L]', category: 'theory', status: 'completed' },
        { id: 'iot-2-2', title: 'Wireless medium access issues, MAC protocol [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iot-2-3', title: 'Routing protocols for Wireless Sensor Networks [1L]', category: 'theory', status: 'not-started' },
        { id: 'iot-2-4', title: 'Sensor deployment & Node discovery, Data aggregation & dissemination [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iot-3',
      number: 3,
      title: 'IoT and M2M Perspectives & Architecture',
      category: 'theory',
      topics: [
        { id: 'iot-3-1', title: 'IoT and M2M Basic Perspective: Introduction, Definitions, M2M Value Chains, IoT Value Chains [2L]', category: 'theory', status: 'completed' },
        { id: 'iot-3-2', title: 'An emerging industrial structure for IoT, International driven global value chain [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iot-3-3', title: 'M2M to IoT Architectural Overview: Building an architecture, Main design principles [2L]', category: 'theory', status: 'not-started' },
        { id: 'iot-3-4', title: 'IoT architecture outline, standards considerations [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iot-4',
      number: 4,
      title: 'IoT Architecture Reference Model',
      category: 'theory',
      topics: [
        { id: 'iot-4-1', title: 'Architecture Reference Model: Introduction, Reference Model and architecture [2L]', category: 'theory', status: 'completed' },
        { id: 'iot-4-2', title: 'IoT Reference Architecture Introduction, Functional View [2L]', category: 'theory', status: 'in-progress' },
        { id: 'iot-4-3', title: 'Information View, Deployment and Operational View [2L]', category: 'theory', status: 'not-started' },
        { id: 'iot-4-4', title: 'Other Relevant architectural views [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'iot-5',
      number: 5,
      title: 'IoT Applications for Value Creations',
      category: 'practical',
      topics: [
        { id: 'iot-5-1', title: 'Introduction to Arduino and Raspberry Pi [1L]', category: 'practical', status: 'completed' },
        { id: 'iot-5-2', title: 'Cloud Computing, Fog Computing, Connected Vehicles [1L]', category: 'practical', status: 'in-progress' },
        { id: 'iot-5-3', title: 'Data Aggregation for the IoT in Smart Cities [1L]', category: 'practical', status: 'in-progress' },
        { id: 'iot-5-4', title: 'IoT applications for industry: Future Factory Concepts, Brownfield IoT, Smart Objects [1L]', category: 'practical', status: 'not-started' },
        { id: 'iot-5-5', title: 'Value Creation from Big Data, IoT in healthcare, smart home Management [1L]', category: 'practical', status: 'not-started' },
      ],
    },
    {
      id: 'iot-6',
      number: 6,
      title: 'IoT Privacy, Security and Governance',
      category: 'theory',
      topics: [
        { id: 'iot-6-1', title: 'Internet of Things Privacy, Security and Governance Introduction [1L]', category: 'theory', status: 'completed' },
        { id: 'iot-6-2', title: 'Overview of Governance, Privacy and Security Issues [1L]', category: 'theory', status: 'in-progress' },
        { id: 'iot-6-3', title: 'Trust in IoT-Data Platforms for Smart Cities, First Steps Towards a Secure Platform, Smartie Approach [1L]', category: 'theory', status: 'not-started' },
        { id: 'iot-6-4', title: 'Data Aggregation and Security for the IoT in smart cities [1L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Discrete Mathematics': [
    {
      id: 'dm-1',
      number: 1,
      title: 'Set Theory, Posets, Lattices & Combinatorics',
      category: 'theory',
      topics: [
        { id: 'dm-1-1', title: 'Relation: Types of Relations, Properties of Binary Relation, Equivalence Relation [2L]', category: 'theory', status: 'completed' },
        { id: 'dm-1-2', title: 'Partial Ordering Relation and Posets, Lattices [2L]', category: 'theory', status: 'completed' },
        { id: 'dm-1-3', title: 'Combinatorics: Principle of Inclusion Exclusion, Pigeon Hole Principle [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dm-1-4', title: 'Generating functions & Recurrence relations: Formulation of counting problems [3L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dm-2',
      number: 2,
      title: 'Propositional Logic',
      category: 'theory',
      topics: [
        { id: 'dm-2-1', title: 'Basics of Boolean Logic, Idea of Propositional Logic, well-formed formula, Logical Connectives [1L]', category: 'theory', status: 'completed' },
        { id: 'dm-2-2', title: 'Truth tables, Tautology, Contradiction, Algebra of proposition, Logical Equivalence [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dm-2-3', title: 'Normal Forms: Disjunctive Normal Forms (DNF) and Conjunctive Normal Forms (CNF) [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dm-3',
      number: 3,
      title: 'Number Theory',
      category: 'theory',
      topics: [
        { id: 'dm-3-1', title: 'Well-Ordering Principle, Divisibility theory and properties of Divisibility [1L]', category: 'theory', status: 'completed' },
        { id: 'dm-3-2', title: 'Fundamental theorem of Arithmetic, Prime and Composite Numbers [1L]', category: 'theory', status: 'in-progress' },
        { id: 'dm-3-3', title: 'Greatest Common Divisor and Euclidean Algorithm [1L]', category: 'theory', status: 'not-started' },
        { id: 'dm-3-4', title: 'Congruence, Residue Classes [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dm-4',
      number: 4,
      title: 'Algebraic Structures',
      category: 'theory',
      topics: [
        { id: 'dm-4-1', title: 'Concepts of Groups, Subgroups and Order, Cyclic Groups, Cosets [2L]', category: 'theory', status: 'completed' },
        { id: 'dm-4-2', title: "Lagrange's theorem, Normal Subgroups, Permutation Groups and Symmetric Groups [3L]", category: 'theory', status: 'in-progress' },
        { id: 'dm-4-3', title: 'Definition of Ring and Field [3L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dm-5',
      number: 5,
      title: 'Graph Theory & Trees',
      category: 'theory',
      topics: [
        { id: 'dm-5-1', title: 'Graph theory, Digraphs, Weighted Graph, Walk, Path, Circuit, Connected & Disconnected Graph [2L]', category: 'theory', status: 'completed' },
        { id: 'dm-5-2', title: 'Bipartite Graph, Complement of a Graph, Regular Graph, Complete Graph [1L]', category: 'theory', status: 'in-progress' },
        { id: 'dm-5-3', title: 'Adjacency and Incidence matrices of a graph, Dijkstra’s algorithm [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dm-5-4', title: 'Tree, Binary Tree, Theorems on Tree (statement only) [1L]', category: 'theory', status: 'not-started' },
        { id: 'dm-5-5', title: 'Spanning Tree, Minimal Spanning Tree (Kruskal’s Algorithm, Prim’s Algorithm) [2L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Digital Logic and Computer Organization': [
    {
      id: 'dl-1',
      number: 1,
      title: 'Number Systems, Boolean Algebra, and Logic Simplification',
      category: 'theory',
      topics: [
        { id: 'dl-1-1', title: 'Binary, BCD, ASCII, EBCDIC, Gray Code & conversions [1L]', category: 'theory', status: 'completed' },
        { id: 'dl-1-2', title: 'Boolean Algebra – Laws, Theorems [1L]', category: 'theory', status: 'completed' },
        { id: 'dl-1-3', title: 'Boolean Functions, Minterm & Maxterm, SOP & POS Forms [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-1-4', title: 'Karnaugh Map (up to 4-variable), Algebraic Simplification [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dl-2',
      number: 2,
      title: 'Combinational Circuits',
      category: 'theory',
      topics: [
        { id: 'dl-2-1', title: 'Half & Full Adder/Subtractor, Serial & Parallel Adders, CLA Adder [2L]', category: 'theory', status: 'completed' },
        { id: 'dl-2-2', title: 'Parity Generator & Checker, Magnitude Comparator [1L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-2-3', title: 'Encoders, Priority Encoders & Decoders (3-to-8 Decoder) [1L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-2-4', title: 'Multiplexers & Demultiplexers Implementation and Logic Synthesis [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dl-3',
      number: 3,
      title: 'Sequential Circuits & Registers',
      category: 'theory',
      topics: [
        { id: 'dl-3-1', title: 'Flip-Flops: SR, JK, Master-Slave JK, D, T; Characteristic & Excitation Tables [2L]', category: 'theory', status: 'completed' },
        { id: 'dl-3-2', title: 'Registers: SISO, SIPO, PISO, PIPO & Universal Shift Registers [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-3-3', title: 'Asynchronous (Ripple) and Synchronous Binary Counters [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dl-4',
      number: 4,
      title: 'Data Representation & Arithmetic Operations',
      category: 'theory',
      topics: [
        { id: 'dl-4-1', title: 'Integer Arithmetic (Add, Subtract), Booth’s Multiplication Algorithm [2L]', category: 'theory', status: 'completed' },
        { id: 'dl-4-2', title: 'Restoring and Non-Restoring Division Algorithms [1L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-4-3', title: 'Floating-Point Representation (IEEE 754 Standard) & Operations [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dl-5',
      number: 5,
      title: 'CPU and Control Unit Organization',
      category: 'theory',
      topics: [
        { id: 'dl-5-1', title: 'Register Transfer Language (RTL), Bus Architecture, Micro-operations [1L]', category: 'theory', status: 'completed' },
        { id: 'dl-5-2', title: 'ALSU Design, Accumulator Architecture & General Register Organization [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-5-3', title: 'Instruction Format, Addressing Modes & Instruction Cycle [2L]', category: 'theory', status: 'not-started' },
        { id: 'dl-5-4', title: 'Control Unit: Hardwired Control vs Microprogrammed Control [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dl-6',
      number: 6,
      title: 'Memory & I/O Organization',
      category: 'theory',
      topics: [
        { id: 'dl-6-1', title: 'RAM, ROM Types, Memory Hierarchy: Cache, Main, Secondary [1L]', category: 'theory', status: 'completed' },
        { id: 'dl-6-2', title: 'Cache Mapping: Direct, Fully Associative, Set-Associative & Replacement Policies [2L]', category: 'theory', status: 'in-progress' },
        { id: 'dl-6-3', title: 'Virtual Memory, Paging, Page Fault & Address Translation [2L]', category: 'theory', status: 'not-started' },
        { id: 'dl-6-4', title: 'I/O Organization: Programmed I/O, Interrupt-Driven I/O & DMA Controller [2L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Engineering Mathematics–II': [
    {
      id: 'm2-1',
      number: 1,
      title: 'Ordinary Differential Equations of Higher Order',
      category: 'theory',
      topics: [
        { id: 'm2-1-1', title: 'Linear ODE with Constant Coefficients [2L]', category: 'theory', status: 'completed' },
        { id: 'm2-1-2', title: 'Cauchy-Euler Equations & Method of Variation of Parameters [2L]', category: 'theory', status: 'in-progress' },
        { id: 'm2-1-3', title: 'Applications in Mechanical & Electrical Vibrations [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'm2-2',
      number: 2,
      title: 'Linear Algebra, Matrices & Vector Spaces',
      category: 'theory',
      topics: [
        { id: 'm2-2-1', title: 'Eigenvalues and Eigenvectors of Real Matrices [2L]', category: 'theory', status: 'completed' },
        { id: 'm2-2-2', title: 'Cayley-Hamilton Theorem & Matrix Diagonalization [2L]', category: 'theory', status: 'not-started' },
        { id: 'm2-2-3', title: 'Orthogonal Matrices & Quadratic Forms [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'm2-3',
      number: 3,
      title: 'Functions of Several Variables & Partial Differentiation',
      category: 'theory',
      topics: [
        { id: 'm2-3-1', title: 'Limits, Continuity and Partial Derivatives [2L]', category: 'theory', status: 'completed' },
        { id: 'm2-3-2', title: "Euler's Theorem on Homogeneous Functions [1L]", category: 'theory', status: 'not-started' },
        { id: 'm2-3-3', title: 'Maxima and Minima & Lagrange Multipliers [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'm2-4',
      number: 4,
      title: 'Multiple Integrals & Vector Calculus',
      category: 'theory',
      topics: [
        { id: 'm2-4-1', title: 'Double and Triple Integrals (Cartesian & Polar) [2L]', category: 'theory', status: 'completed' },
        { id: 'm2-4-2', title: 'Gradient, Divergence and Curl of Vector Fields [2L]', category: 'theory', status: 'in-progress' },
        { id: 'm2-4-3', title: "Green's, Gauss Divergence & Stokes' Theorems [2L]", category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Engineering Chemistry': [
    {
      id: 'ch-chem-1',
      number: 1,
      title: 'Atomic & Molecular Structure',
      category: 'theory',
      topics: [
        { id: 'ch-chem-1-1', title: 'Molecular Orbital Theory of Diatomic Molecules (O2, N2, CO) [2L]', category: 'theory', status: 'completed' },
        { id: 'ch-chem-1-2', title: 'Band Theory of Solids & Semiconductors [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ch-chem-2',
      number: 2,
      title: 'Spectroscopic Techniques & Applications',
      category: 'theory',
      topics: [
        { id: 'ch-chem-2-1', title: 'Principles of UV-Visible & IR Spectroscopy [2L]', category: 'theory', status: 'completed' },
        { id: 'ch-chem-2-2', title: 'NMR Spectroscopy & Magnetic Resonance Imaging [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ch-chem-3',
      number: 3,
      title: 'Thermodynamics, Electrochemistry & Corrosion',
      category: 'theory',
      topics: [
        { id: 'ch-chem-3-1', title: 'Free Energy, Entropy & Chemical Equilibria [2L]', category: 'theory', status: 'completed' },
        { id: 'ch-chem-3-2', title: 'Nernst Equation & Electrochemical Cells [2L]', category: 'theory', status: 'in-progress' },
        { id: 'ch-chem-3-3', title: 'Corrosion Mechanisms & Cathodic Protection [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'ch-chem-4',
      number: 4,
      title: 'Polymers & Smart Nanomaterials',
      category: 'theory',
      topics: [
        { id: 'ch-chem-4-1', title: 'Conducting Polymers & Polymer Composites [2L]', category: 'theory', status: 'completed' },
        { id: 'ch-chem-4-2', title: 'Carbon Nanotubes & Graphene Applications [1L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Constitution of India & Professional Ethics': [
    {
      id: 'const-1',
      number: 1,
      title: 'History & Philosophical Foundations of Constitution',
      category: 'theory',
      topics: [
        { id: 'const-1-1', title: 'Historical Background & Drafting of Indian Constitution [2L]', category: 'theory', status: 'completed' },
        { id: 'const-1-2', title: 'Preamble: Sovereign, Socialist, Secular, Democratic, Republic [1L]', category: 'theory', status: 'completed' },
        { id: 'const-1-3', title: 'Salient Features & Citizenship Provisions [1L]', category: 'theory', status: 'in-progress' },
      ],
    },
    {
      id: 'const-2',
      number: 2,
      title: 'Fundamental Rights & Directive Principles (DPSP)',
      category: 'theory',
      topics: [
        { id: 'const-2-1', title: 'Fundamental Rights (Articles 14 to 32) & Reasonable Restrictions [2L]', category: 'theory', status: 'completed' },
        { id: 'const-2-2', title: 'Constitutional Remedies & Writs (Habeas Corpus, Mandamus, Quo-Warranto) [1L]', category: 'theory', status: 'in-progress' },
        { id: 'const-2-3', title: 'Directive Principles of State Policy & Fundamental Duties [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'const-3',
      number: 3,
      title: 'Union & State Executive and Judiciary',
      category: 'theory',
      topics: [
        { id: 'const-3-1', title: 'President, Prime Minister, Council of Ministers & Parliament [2L]', category: 'theory', status: 'completed' },
        { id: 'const-3-2', title: 'Supreme Court of India, High Courts & Judicial Review [1L]', category: 'theory', status: 'in-progress' },
        { id: 'const-3-3', title: 'Emergency Provisions & Constitutional Amendments (Article 368) [1L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'const-4',
      number: 4,
      title: 'Engineering & Professional Ethics',
      category: 'theory',
      topics: [
        { id: 'const-4-1', title: 'Professional Responsibilities, Integrity & Conflict of Interest [1L]', category: 'theory', status: 'completed' },
        { id: 'const-4-2', title: 'Intellectual Property Rights, Cyber Ethics & Environmental Stewardship [1L]', category: 'theory', status: 'in-progress' },
        { id: 'const-4-3', title: 'Whistleblowing & Global Ethical Dilemmas in Technology [1L]', category: 'theory', status: 'not-started' },
      ],
    },
  ],

  'Design Thinking & Innovation': [
    {
      id: 'dt-1',
      number: 1,
      title: 'Foundations of Design Thinking',
      category: 'theory',
      topics: [
        { id: 'dt-1-1', title: 'Design Mindsets & Human-Centered Design Cycle [2L]', category: 'theory', status: 'completed' },
        { id: 'dt-1-2', title: 'Empathy Mapping & User Need Discovery [2L]', category: 'theory', status: 'not-started' },
      ],
    },
    {
      id: 'dt-2',
      number: 2,
      title: 'Problem Framing & Creative Ideation',
      category: 'practical',
      topics: [
        { id: 'dt-2-1', title: 'POV Statements & How-Might-We Questions [2L]', category: 'practical', status: 'completed' },
        { id: 'dt-2-2', title: 'Brainstorming, SCAMPER & Concept Selection [2L]', category: 'practical', status: 'in-progress' },
      ],
    },
    {
      id: 'dt-3',
      number: 3,
      title: 'Rapid Prototyping & Field Validation',
      category: 'practical',
      topics: [
        { id: 'dt-3-1', title: 'Low-Fidelity Physical & Digital Prototypes [2L]', category: 'practical', status: 'in-progress' },
        { id: 'dt-3-2', title: 'Usability Testing & Iterative Feedback Loops [2L]', category: 'practical', status: 'not-started' },
      ],
    },
  ],
  'Introduction to Programming and Problem Solving': [
        {
            "id": "c-prog-1",
            "number": 1,
            "title": "Basics of Computing & Number Representation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cp-1-1",
                    "title": "History & Computer Generations: Digital, Analog, Micro, Mini, Mainframe [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-1-2",
                    "title": "Computer Architecture: Input/Output Units, Primary & Secondary Memory, CPU [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-1-3",
                    "title": "Number Systems: Binary, Octal, Decimal, Hexadecimal & Conversions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-1-4",
                    "title": "Signed Numbers: 1's and 2's Complement, IEEE 754 Floating-Point Format [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-1-5",
                    "title": "Compilers, Interpreters, Assemblers, Linkers & Loaders [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "c-prog-2",
            "number": 2,
            "title": "Problem Solving & Introduction to C Programming",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cp-2-1",
                    "title": "Algorithm, Flowcharts & Pseudocode; Procedural vs Structured Programming [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-2-2",
                    "title": "C Fundamentals: Keywords, Identifiers, Variable Naming, Storage Sizes & Endianness [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-2-3",
                    "title": "Operators: Arithmetic, Relational, Logical, Bitwise & Conditional [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-2-4",
                    "title": "Operator Precedence, Associativity & Type Casting [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cp-2-5",
                    "title": "Formatted Input/Output: scanf(), printf() and Escape Sequences [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "c-prog-3",
            "number": 3,
            "title": "Control Structures & Modular Program Design",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cp-3-1",
                    "title": "Conditional Statements: if, if-else, nested-if, switch-case constructs [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-3-2",
                    "title": "Iterative Constructs: while, for, do-while loops, break and continue [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-3-3",
                    "title": "Functions: Declaration, Definition, Prototypes & Call by Value/Reference [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-3-4",
                    "title": "Recursion Principles, Stack Frames Execution & Tower of Hanoi [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cp-3-5",
                    "title": "Storage Classes (auto, static, extern, register) & Macro Preprocessors [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "c-prog-4",
            "number": 4,
            "title": "Arrays, Pointers and String Manipulation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cp-4-1",
                    "title": "1D & 2D Arrays: Memory Linearization and Passing Arrays to Functions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cp-4-2",
                    "title": "Pointers: Pointer Arithmetic, Pointer to Arrays & Double Pointers [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-4-3",
                    "title": "String Manipulation: Character Arrays, string.h library functions & 2D Strings [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-4-4",
                    "title": "Dynamic Memory Allocation: malloc(), calloc(), realloc(), free() & Memory Leaks [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "c-prog-5",
            "number": 5,
            "title": "Structures, Unions & File Management",
            "category": "practical",
            "topics": [
                {
                    "id": "t-cp-5-1",
                    "title": "Structures: Definition, Initialization, Nested Structures & Array of Structures [2L]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-cp-5-2",
                    "title": "Unions, Typedef, Enumerations & Bit-fields [2L]",
                    "category": "practical",
                    "status": "in-progress"
                },
                {
                    "id": "t-cp-5-3",
                    "title": "File Operations: fopen(), fclose(), fprintf(), fscanf(), fgetc(), fputc() [2L]",
                    "category": "practical",
                    "status": "not-started"
                },
                {
                    "id": "t-cp-5-4",
                    "title": "Binary File I/O: fread(), fwrite(), fseek(), ftell() & Command Line Args [1L]",
                    "category": "practical",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Engineering Physics': [
        {
            "id": "ep-1",
            "number": 1,
            "title": "Modern Optics, Lasers & Optical Fibers",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ep-1-1",
                    "title": "Spontaneous & Stimulated Emission, Einstein's A and B Coefficients [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ep-1-2",
                    "title": "Population Inversion, Metastable States & Pumping Mechanisms [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ep-1-3",
                    "title": "Ruby Laser, He-Ne Laser & Semiconductor Laser Construction [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-1-4",
                    "title": "Optical Fibers: Total Internal Reflection, Step vs Graded Index [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-1-5",
                    "title": "Numerical Aperture, Acceptance Angle & Attenuation Mechanisms [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ep-2",
            "number": 2,
            "title": "Solid State Physics & Semiconductors",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ep-2-1",
                    "title": "Crystal Systems, Bravais Lattices, Unit Cells & Miller Indices [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ep-2-2",
                    "title": "Atomic Packing Factor, Coordination Number & Bragg's X-ray Diffraction [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-2-3",
                    "title": "Energy Bands: Conductors, Semiconductors & Insulators [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ep-2-4",
                    "title": "Carrier Concentration in Intrinsic & Extrinsic Semiconductors, Fermi Level [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ep-3",
            "number": 3,
            "title": "Quantum Mechanics & Statistical Physics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ep-3-1",
                    "title": "Inadequacy of Classical Mechanics, Photoelectric Effect & Compton Scattering [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ep-3-2",
                    "title": "De Broglie Wave-Particle Duality & Davisson-Germer Experiment [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-3-3",
                    "title": "Heisenberg Uncertainty Principle & Wave Function Physical Interpretation [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-3-4",
                    "title": "Time-Independent Schr\u00f6dinger Wave Equation & 1D Potential Well [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ep-3-5",
                    "title": "Statistical Ensembles: Maxwell-Boltzmann, Bose-Einstein & Fermi-Dirac [4L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ep-4",
            "number": 4,
            "title": "Physics of Nanomaterials & Modern Devices",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ep-4-1",
                    "title": "Quantum Confinement: Quantum Wells, Wires & Dots (Density of States) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ep-4-2",
                    "title": "Carbon Nanotubes (CNTs), Graphene Properties & Synthesis [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ep-4-3",
                    "title": "Magnetic Storage Materials, Hysteresis Loop & Giant Magnetoresistance [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ep-4-4",
                    "title": "Optoelectronic Display Devices: CRT, LED, OLED & Solar Cells [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Engineering Mathematics-I': [
        {
            "id": "m1-1",
            "number": 1,
            "title": "Linear Algebra, Matrices & Eigenvalues",
            "category": "theory",
            "topics": [
                {
                    "id": "t-m1-1-1",
                    "title": "Matrix Echelon Form, Normal Canonical Form & Matrix Rank [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-m1-1-2",
                    "title": "System of Linear Equations: Consistency, Rouche-Capelli Theorem & Solutions [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-m1-1-3",
                    "title": "Eigenvalues & Eigenvectors: Characteristic Equation & Properties [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-m1-1-4",
                    "title": "Cayley-Hamilton Theorem: Finding Inverse & Higher Powers of Matrices [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-m1-1-5",
                    "title": "Orthogonal Matrices & Diagonalization of Symmetric Matrices [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "m1-2",
            "number": 2,
            "title": "Single Variable Calculus & Mean Value Theorems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-m1-2-1",
                    "title": "Rolle's Theorem & Lagrange's Mean Value Theorem with Geometric Interpretation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-m1-2-2",
                    "title": "Cauchy's Mean Value Theorem & Taylor's/Maclaurin's Expansion with Remainder [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-m1-2-3",
                    "title": "Indeterminate Forms & L'Hospital's Rule [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "m1-3",
            "number": 3,
            "title": "Multivariable Calculus (Partial Differentiation)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-m1-3-1",
                    "title": "Functions of Several Variables: Limits, Continuity & Partial Derivatives [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-m1-3-2",
                    "title": "Total Derivatives, Chain Rule & Differentiation of Implicit Functions [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-m1-3-3",
                    "title": "Euler's Theorem on Homogeneous Functions & Corollaries [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-m1-3-4",
                    "title": "Jacobians of Coordinate Transformations & Functional Dependence [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-m1-3-5",
                    "title": "Maxima and Minima of Functions of Two Variables & Lagrange Multipliers [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "m1-4",
            "number": 4,
            "title": "Multivariable Calculus (Multiple Integrals)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-m1-4-1",
                    "title": "Double Integrals over Rectangular & General Regions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-m1-4-2",
                    "title": "Change of Order of Integration & Change to Polar Coordinates [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-m1-4-3",
                    "title": "Triple Integrals & Volume Computation in Cartesian/Cylindrical/Spherical Coordinates [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-m1-4-4",
                    "title": "Vector Calculus: Gradient, Divergence, Curl, Green's, Stokes' & Gauss Divergence Theorems [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Environmental Science': [
        {
            "id": "es-1",
            "number": 1,
            "title": "Natural Resources & Ecosystem Dynamics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-es-1-1",
                    "title": "Renewable vs Non-Renewable Resources & Human Resource Capital [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-es-1-2",
                    "title": "Population Growth Models: Exponential, Logistic Growth & Maximum Sustainable Yield [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-es-1-3",
                    "title": "Alternative Energy: Solar, Wind, Tidal, Geothermal & Biomass Energy [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-es-1-4",
                    "title": "Ecosystem Structure: Trophic Levels, Food Chains, Food Webs & Ecological Pyramids [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "es-2",
            "number": 2,
            "title": "Environmental Degradation & Pollution Control",
            "category": "theory",
            "topics": [
                {
                    "id": "t-es-2-1",
                    "title": "Air Pollution: Primary & Secondary Pollutants, Photochemical Smog, Acid Rain, Greenhouse Effect [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-es-2-2",
                    "title": "Water Pollution: Heavy Metal Toxicity, BOD & COD Rate Equations, Eutrophication [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-es-2-3",
                    "title": "Solid, Biomedical & E-Waste Management Protocols [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-es-2-4",
                    "title": "Noise Pollution Thresholds & Sound Level Measurement (dB) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "es-3",
            "number": 3,
            "title": "Environmental Management, Auditing & Legislation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-es-3-1",
                    "title": "Environmental Impact Assessment (EIA) & Environmental Auditing [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-es-3-2",
                    "title": "Environmental Protection Acts, Carbon Footprinting & Green Buildings (GRIHA Norms) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-es-3-3",
                    "title": "Water & Effluent Treatment: Activated Sludge Process, Permutit Water Softening [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "es-4",
            "number": 4,
            "title": "Disaster Management & Mitigation Frameworks",
            "category": "theory",
            "topics": [
                {
                    "id": "t-es-4-1",
                    "title": "Natural Disasters: Earthquakes, Tsunamis, Floods, Droughts & Landslides [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-es-4-2",
                    "title": "Disaster Management Cycle: Preparedness, Mitigation, Early Warning & Relief Policies [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Indian Knowledge System': [
        {
            "id": "iks-1",
            "number": 1,
            "title": "Overview of Indian Knowledge System (IKS)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-iks-1-1",
                    "title": "Definition, Scope & Classification Framework of IKS [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-iks-1-2",
                    "title": "Vedic Corpus: Vedas, Vedangas & Lifestyle Principles [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-iks-1-3",
                    "title": "Indian Philosophical Schools: Orthodox (Astika) vs Unorthodox (Nastika) [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "iks-2",
            "number": 2,
            "title": "Indian Numeral System & Mathematical Traditions",
            "category": "theory",
            "topics": [
                {
                    "id": "t-iks-2-1",
                    "title": "Decimal Place Value Representation & Discovery of Zero (Shunya) [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-iks-2-2",
                    "title": "Contributions of Aryabhata, Brahmagupta, Bhaskara II & Madhava [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-iks-2-3",
                    "title": "Astronomical Observations & Calendar Computation in Ancient India [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "iks-3",
            "number": 3,
            "title": "Science, Technology, Metallurgy & Town Planning",
            "category": "theory",
            "topics": [
                {
                    "id": "t-iks-3-1",
                    "title": "Ancient Metallurgy: Wootz Steel, Delhi Iron Pillar & Zinc Smelting [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-iks-3-2",
                    "title": "Structural Engineering, Indus Valley Town Planning & Temple Architecture [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-iks-3-3",
                    "title": "Shipbuilding, Textile Dyes & Maritime Navigation [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "iks-4",
            "number": 4,
            "title": "Traditional Healthcare, Agriculture & Ecology",
            "category": "theory",
            "topics": [
                {
                    "id": "t-iks-4-1",
                    "title": "Ayurvedic Principles, Herbal Therapeutics & Sushruta Surgical Heritage [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-iks-4-2",
                    "title": "Traditional Agricultural Methods & Rainwater Harvesting (Stepwells/Baolis) [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Basic Electrical Engineering': [
        {
            "id": "bee-1",
            "number": 1,
            "title": "DC Circuit Analysis & Network Theorems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bee-1-1",
                    "title": "Ohm's Law, Kirchhoff's Current Law (KCL) & Voltage Law (KVL) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bee-1-2",
                    "title": "Nodal and Mesh Analysis of Resistive Circuits [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bee-1-3",
                    "title": "Network Theorems: Superposition Theorem & Thevenin's Theorem [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bee-1-4",
                    "title": "Norton's Theorem & Maximum Power Transfer Theorem [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bee-2",
            "number": 2,
            "title": "Single-Phase AC Circuits & Resonance",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bee-2-1",
                    "title": "Sinusoidal AC Waveforms: RMS, Average, Form Factor & Peak Factor [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bee-2-2",
                    "title": "Phasor Representation of RL, RC & RLC Series Circuits [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bee-2-3",
                    "title": "Real, Reactive & Apparent Power; Power Factor & Its Improvement [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bee-2-4",
                    "title": "Series & Parallel Resonance: Resonant Frequency, Bandwidth & Q-Factor [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bee-3",
            "number": 3,
            "title": "Three-Phase Circuits & Magnetic Circuits",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bee-3-1",
                    "title": "Three-Phase Star and Delta Connections: Line vs Phase Relations [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bee-3-2",
                    "title": "Three-Phase Power Measurement Using Two-Wattmeter Method [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bee-3-3",
                    "title": "Magnetic Circuits: B-H Curve, Reluctance, Hysteresis & Eddy Current Losses [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bee-4",
            "number": 4,
            "title": "Transformers, Electrical Machines & Safety",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bee-4-1",
                    "title": "Single-Phase Transformer: Principle, EMF Equation, Equivalent Circuit & Losses [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bee-4-2",
                    "title": "DC Motor: Construction, Back EMF, Torque Equation & Speed-Torque Characteristics [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bee-4-3",
                    "title": "Three-Phase Induction Motor: Principle, Slip, Rotating Magnetic Field [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bee-4-4",
                    "title": "Electrical Safety Installations: Earthing Types, Fuse, MCB, ELCB Protection [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Engineering Graphics & Design': [
        {
            "id": "egd-1",
            "number": 1,
            "title": "Engineering Drawing Principles & Scales",
            "category": "practical",
            "topics": [
                {
                    "id": "t-egd-1-1",
                    "title": "Lettering, Dimensioning Rules & Conic Sections (Ellipse, Parabola, Hyperbola) [3P]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-egd-1-2",
                    "title": "Cycloids, Involutes of Circles & Polygons [3P]",
                    "category": "practical",
                    "status": "in-progress"
                },
                {
                    "id": "t-egd-1-3",
                    "title": "Plain Scales, Diagonal Scales & Vernier Scales Construction [3P]",
                    "category": "practical",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "egd-2",
            "number": 2,
            "title": "Orthographic & Isometric Projections",
            "category": "practical",
            "topics": [
                {
                    "id": "t-egd-2-1",
                    "title": "Projections of Points & Lines Inclined to Reference Planes [3P]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-egd-2-2",
                    "title": "Projections of Regular Planes (Triangle, Square, Circle, Hexagon) [3P]",
                    "category": "practical",
                    "status": "in-progress"
                },
                {
                    "id": "t-egd-2-3",
                    "title": "Projections of Solids (Prisms, Pyramids, Cylinders, Cones) [3P]",
                    "category": "practical",
                    "status": "not-started"
                },
                {
                    "id": "t-egd-2-4",
                    "title": "Isometric Projections from Orthographic Views [3P]",
                    "category": "practical",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "egd-3",
            "number": 3,
            "title": "Sections of Solids & Computer-Aided Drafting (CAD)",
            "category": "practical",
            "topics": [
                {
                    "id": "t-egd-3-1",
                    "title": "Section Planes & True Shape of Section of Cut Solids [3P]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-egd-3-2",
                    "title": "Development of Lateral Surfaces of Prisms, Cylinders & Cones [3P]",
                    "category": "practical",
                    "status": "in-progress"
                },
                {
                    "id": "t-egd-3-3",
                    "title": "2D CAD Drafting Tools, Layer Management & Dimensioning [3P]",
                    "category": "practical",
                    "status": "not-started"
                },
                {
                    "id": "t-egd-3-4",
                    "title": "3D Solid Modeling & Orthographic View Generation in CAD [3P]",
                    "category": "practical",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Database Management Systems': [
        {
            "id": "dbms-1",
            "number": 1,
            "title": "DBMS Architecture & Relational Data Model",
            "category": "theory",
            "topics": [
                {
                    "id": "t-db-1-1",
                    "title": "Overview of DBMS, Data Abstraction & Three-Schema Architecture [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-1-2",
                    "title": "Data Independence: Logical and Physical Independence [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-1-3",
                    "title": "Entity-Relationship (ER) Modeling: Entities, Attributes, Relationships & Constraints [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-1-4",
                    "title": "Extended ER Features: Specialization, Generalization & Aggregation [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-1-5",
                    "title": "Relational Model: Relations, Tuples, Candidate Keys, Primary Keys & Foreign Keys [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dbms-2",
            "number": 2,
            "title": "Relational Algebra & Structured Query Language (SQL)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-db-2-1",
                    "title": "Relational Algebra Operations: Select, Project, Join (Theta, Natural, Outer), Division [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-2-2",
                    "title": "SQL DDL & DML: Table Creation, Alteration, Constraints & Integrity Rules [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-2-3",
                    "title": "Complex Queries: Nested Subqueries, Correlated Subqueries, Group By, Having [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-2-4",
                    "title": "Views, Assertions, Triggers, Stored Procedures & PL/SQL Cursors [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dbms-3",
            "number": 3,
            "title": "Relational Database Design & Normalization",
            "category": "theory",
            "topics": [
                {
                    "id": "t-db-3-1",
                    "title": "Functional Dependencies: Closure of Attributes, Minimal Cover & Canonical Form [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-3-2",
                    "title": "Lossless Join Decomposition & Dependency Preservation [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-3-3",
                    "title": "Normal Forms: 1NF, 2NF, 3NF & Boyce-Codd Normal Form (BCNF) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-3-4",
                    "title": "Higher Normal Forms: Multi-Valued Dependencies (4NF) & Join Dependencies (5NF) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dbms-4",
            "number": 4,
            "title": "Transaction Processing & Concurrency Control",
            "category": "theory",
            "topics": [
                {
                    "id": "t-db-4-1",
                    "title": "Transaction Concepts, ACID Properties & State Diagrams [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-4-2",
                    "title": "Schedules: Conflict Serializability, View Serializability & Precedence Graphs [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-4-3",
                    "title": "Lock-Based Protocols: Two-Phase Locking (2PL), Strict 2PL & Rigorous 2PL [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-db-4-4",
                    "title": "Deadlock Handling: Wait-Die, Wound-Wait & Wait-For Graph Detection [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-db-4-5",
                    "title": "Log-Based Recovery: Write-Ahead Logging (WAL), Checkpoints & Shadow Paging [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dbms-5",
            "number": 5,
            "title": "Storage Structures & Indexing Techniques",
            "category": "theory",
            "topics": [
                {
                    "id": "t-db-5-1",
                    "title": "File Organization: Heap, Sorted & Hashed Files [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-db-5-2",
                    "title": "Single-Level Indexing: Primary, Secondary, Dense & Sparse Indexes [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-db-5-3",
                    "title": "B-Tree & B+ Tree Indexing: Node Structure, Insertion, Deletion & Search Cost [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-db-5-4",
                    "title": "Hashing Techniques: Static vs Dynamic Hashing (Extendible & Linear Hashing) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Computer Networks': [
        {
            "id": "cn-1",
            "number": 1,
            "title": "Network Topologies, Layering & Physical Layer",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cn-1-1",
                    "title": "Network Topologies (Star, Mesh, Ring, Bus) & Reference Models (OSI vs TCP/IP) [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-1-2",
                    "title": "Packet Switching vs Circuit Switching & Virtual Circuit Networks [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-1-3",
                    "title": "Transmission Media: Twisted Pair, Coaxial Cable, Fiber Optics & Wireless Radio [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-1-4",
                    "title": "Multiplexing Techniques (FDM, TDM, WDM) & Switching Architectures [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cn-2",
            "number": 2,
            "title": "Data Link Layer & Medium Access Control",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cn-2-1",
                    "title": "Framing Methods: Character Count, Byte Stuffing & Bit Stuffing [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-2-2",
                    "title": "Error Detection & Correction: Parity, Checksum, CRC Polynomial & Hamming Code [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-2-3",
                    "title": "Flow Control Protocols: Stop-and-Wait, Go-Back-N & Selective Repeat ARQ [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-2-4",
                    "title": "Random Access Protocols: Pure & Slotted ALOHA, CSMA, CSMA/CD, CSMA/CA [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cn-2-5",
                    "title": "Ethernet Standards (IEEE 802.3), Fast Ethernet, Gigabit Ethernet & Bridges [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cn-3",
            "number": 3,
            "title": "Network Layer, IP Addressing & Routing Protocols",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cn-3-1",
                    "title": "IPv4 vs IPv6 Addressing, Subnetting, VLSM & Classless Inter-Domain Routing (CIDR) [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-3-2",
                    "title": "Address Resolution Protocol (ARP), RARP, ICMP & Network Address Translation (NAT) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-3-3",
                    "title": "Distance Vector Routing & Count-to-Infinity Problem (RIP) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-3-4",
                    "title": "Link State Routing (Dijkstra's Algorithm & OSPF) [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cn-3-5",
                    "title": "Border Gateway Protocol (BGP) & Hierarchical Routing [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cn-3-6",
                    "title": "Congestion Control: Leaky Bucket & Token Bucket Algorithms [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cn-4",
            "number": 4,
            "title": "Transport Layer Protocols & Congestion Management",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cn-4-1",
                    "title": "Transport Layer Services: Port Numbers, Multiplexing & Sockets [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-4-2",
                    "title": "User Datagram Protocol (UDP): Header Format & Checksum [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-4-3",
                    "title": "Transmission Control Protocol (TCP): Segment Header & 3-Way Handshake Connection [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-4-4",
                    "title": "TCP Flow Control: Sliding Window & Silly Window Syndrome [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cn-4-5",
                    "title": "TCP Congestion Control: Slow Start, Congestion Avoidance, Fast Retransmit/Recovery [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cn-5",
            "number": 5,
            "title": "Application Layer & Network Security Foundations",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cn-5-1",
                    "title": "Domain Name System (DNS): Hierarchical Architecture & Resolution [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cn-5-2",
                    "title": "Web Protocols: HTTP/1.1 vs HTTP/2, Persistent Connections & Cookies [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cn-5-3",
                    "title": "Electronic Mail: SMTP, POP3, IMAP & MIME Architecture [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cn-5-4",
                    "title": "Network Security: Cryptography, Public-Key Infrastructure & SSL/TLS Handshake [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Machine Learning': [
        {
            "id": "ml-1",
            "number": 1,
            "title": "Supervised Learning Fundamentals & Regression",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ml-1-1",
                    "title": "ML Taxonomy: Supervised, Unsupervised & Reinforcement Learning [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-1-2",
                    "title": "Data Preprocessing: Missing Values, One-Hot Encoding & Feature Scaling [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-1-3",
                    "title": "Linear Regression: Cost Function, Ordinary Least Squares & Gradient Descent [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-1-4",
                    "title": "Regularization Techniques: Ridge (L2), Lasso (L1) & ElasticNet [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ml-2",
            "number": 2,
            "title": "Classification Algorithms & Decision Boundaries",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ml-2-1",
                    "title": "Logistic Regression: Sigmoid Activation, Cross-Entropy Loss & Multi-class Softmax [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-2-2",
                    "title": "Decision Trees: Information Gain, Entropy, Gini Impurity & Pruning (ID3, C4.5, CART) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-2-3",
                    "title": "K-Nearest Neighbors (KNN): Distance Metrics, Curse of Dimensionality & Boundary Analysis [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-2-4",
                    "title": "Naive Bayes Classifier: Bayes' Theorem, Conditional Independence & Laplace Smoothing [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ml-2-5",
                    "title": "Support Vector Machines (SVM): Hyperplane, Maximum Margin, Soft Margin & Kernel Trick [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ml-3",
            "number": 3,
            "title": "Unsupervised Learning, Clustering & Dimensionality Reduction",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ml-3-1",
                    "title": "K-Means Clustering: Algorithm, Elbow Method & Silhouette Coefficient [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-3-2",
                    "title": "Hierarchical Clustering: Agglomerative vs Divisive, Dendrograms & Linkage Criteria [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-3-3",
                    "title": "DBSCAN: Density-Based Spatial Clustering, Core Points, Noise & Epsilon Threshold [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ml-3-4",
                    "title": "Principal Component Analysis (PCA): Covariance Matrix, Eigenvectors & Variance Retention [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ml-4",
            "number": 4,
            "title": "Model Evaluation, Bias-Variance & Ensemble Methods",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ml-4-1",
                    "title": "Evaluation Metrics: Confusion Matrix, Precision, Recall, F1-Score & ROC-AUC Curves [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-4-2",
                    "title": "Bias-Variance Trade-off, Overfitting vs Underfitting & Cross-Validation [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-4-3",
                    "title": "Ensemble Learning: Bagging, Bootstrap Aggregating & Random Forests [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-4-4",
                    "title": "Boosting: AdaBoost, Gradient Boosting & XGBoost Principles [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ml-5",
            "number": 5,
            "title": "Neural Networks, Deep Learning & Ethical AI",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ml-5-1",
                    "title": "Artificial Neural Networks (ANN): Perceptron, Multilayer Perceptron & Activation Functions [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ml-5-2",
                    "title": "Backpropagation Algorithm & Stochastic Gradient Descent (SGD, Adam) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ml-5-3",
                    "title": "Hyperparameter Tuning: Grid Search, Random Search & Bayesian Optimization [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ml-5-4",
                    "title": "Ethical AI: Algorithmic Fairness, Bias Mitigation & Model Explainability (SHAP, LIME) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Formal Language and Automata Theory': [
        {
            "id": "flat-1",
            "number": 1,
            "title": "Finite Automata & State Machine Minimization",
            "category": "theory",
            "topics": [
                {
                    "id": "t-fl-1-1",
                    "title": "Alphabet, Strings, Languages, Deterministic Finite Automata (DFA) Formal Definition [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-1-2",
                    "title": "Non-Deterministic Finite Automata (NFA) & NFA with \u03b5-Transitions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-1-3",
                    "title": "Equivalence of NFA and DFA: Subset Construction Algorithm [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-1-4",
                    "title": "DFA Minimization: Table Filling Method & Myhill-Nerode Theorem [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "flat-2",
            "number": 2,
            "title": "Moore & Mealy Machines & Regular Expressions",
            "category": "theory",
            "topics": [
                {
                    "id": "t-fl-2-1",
                    "title": "Finite Automata with Output: Moore and Mealy Machine State Diagrams [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-2-2",
                    "title": "Conversion: Moore to Mealy and Mealy to Moore Machine Transformations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-2-3",
                    "title": "Regular Expressions, Algebraic Laws & Arden's Theorem for State Equations [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-2-4",
                    "title": "Conversion between Regular Expressions and Finite Automata [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "flat-3",
            "number": 3,
            "title": "Regular Grammars, Pumping Lemma & Properties",
            "category": "theory",
            "topics": [
                {
                    "id": "t-fl-3-1",
                    "title": "Pumping Lemma for Regular Languages & Proof of Non-Regularity [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-3-2",
                    "title": "Closure Properties of Regular Languages (Union, Intersection, Complement, Star) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-3-3",
                    "title": "Decision Properties of Regular Languages: Emptiness, Finiteness, Equivalence [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "flat-4",
            "number": 4,
            "title": "Context-Free Grammars & Pushdown Automata",
            "category": "theory",
            "topics": [
                {
                    "id": "t-fl-4-1",
                    "title": "Context-Free Grammars (CFG): Derivations, Parse Trees & Language Ambiguity [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-4-2",
                    "title": "Simplification of CFG: Elimination of Useless Symbols, \u03b5-Productions & Unit Rules [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-4-3",
                    "title": "Normal Forms: Chomsky Normal Form (CNF) & Greibach Normal Form (GNF) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-4-4",
                    "title": "Pushdown Automata (PDA): Formal Definition, Instantaneous Descriptions & Transitions [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-fl-4-5",
                    "title": "Equivalence of Acceptance by Final State and Empty Stack in PDA [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "flat-5",
            "number": 5,
            "title": "Turing Machines & Computability Theory",
            "category": "theory",
            "topics": [
                {
                    "id": "t-fl-5-1",
                    "title": "Pumping Lemma for Context-Free Languages & Non-CFL Proofs [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-fl-5-2",
                    "title": "Turing Machine (TM) Model: Formal Definition, Tape Operations & Transition Function [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-fl-5-3",
                    "title": "Multi-tape Turing Machines, Non-deterministic TM & Universal Turing Machine [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-fl-5-4",
                    "title": "Halting Problem, Undecidability, Post Correspondence Problem (PCP) & Chomsky Hierarchy [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Probability and Statistics': [
        {
            "id": "ps-1",
            "number": 1,
            "title": "Probability Distributions & Random Variables",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ps-1-1",
                    "title": "Axioms of Probability, Conditional Probability & Bayes' Theorem [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ps-1-2",
                    "title": "Discrete Random Variables: Probability Mass Function (PMF), Expectation & Variance [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ps-1-3",
                    "title": "Discrete Distributions: Binomial, Poisson & Geometric Distributions [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ps-1-4",
                    "title": "Continuous Random Variables: Probability Density Function (PDF) & Cumulative Distribution [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ps-1-5",
                    "title": "Continuous Distributions: Uniform, Exponential & Normal Distributions [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ps-2",
            "number": 2,
            "title": "Two-Dimensional Random Variables & Limit Theorems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ps-2-1",
                    "title": "Joint, Marginal & Conditional Probability Distributions [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ps-2-2",
                    "title": "Covariance, Correlation Coefficient & Lines of Regression [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ps-2-3",
                    "title": "Transformation of Bivariate Random Variables [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ps-2-4",
                    "title": "Central Limit Theorem (CLT) & Chebyshev's Inequality [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ps-3",
            "number": 3,
            "title": "Sampling Theory & Parameter Estimation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ps-3-1",
                    "title": "Population, Random Sample, Sample Mean & Sample Variance [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ps-3-2",
                    "title": "Sampling Distributions: Student's t-Distribution, Chi-Square Distribution & F-Distribution [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ps-3-3",
                    "title": "Point Estimation: Unbiasedness, Consistency & Maximum Likelihood Estimation (MLE) [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ps-3-4",
                    "title": "Interval Estimation: Confidence Intervals for Means & Proportions [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ps-4",
            "number": 4,
            "title": "Hypothesis Testing & Statistical Inference",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ps-4-1",
                    "title": "Null & Alternative Hypotheses, Type I & Type II Errors, Significance Level [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ps-4-2",
                    "title": "Large Sample Tests (Z-Tests) for Single Mean & Difference of Means [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ps-4-3",
                    "title": "Small Sample Tests (t-Tests) for Means & Paired t-Test [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ps-4-4",
                    "title": "Chi-Square Test for Goodness of Fit & Independence of Attributes in Contingency Tables [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Principles of Management': [
        {
            "id": "pom-1",
            "number": 1,
            "title": "Foundations & Evolution of Management Thought",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pom-1-1",
                    "title": "Nature, Purpose, Levels & Functions of Management [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pom-1-2",
                    "title": "Scientific Management (F.W. Taylor) & Administrative Principles (Henri Fayol) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pom-1-3",
                    "title": "Bureaucratic Theory (Max Weber) & Human Relations Movement (Elton Mayo) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "pom-2",
            "number": 2,
            "title": "Strategic Planning & Organizational Structure",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pom-2-1",
                    "title": "Planning Process, MBO (Management by Objectives) & SWOT Analysis [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pom-2-2",
                    "title": "Strategic Planning Models: Porter's Five Forces & McKinsey 7S Framework [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pom-2-3",
                    "title": "Organizational Design: Functional, Divisional, Matrix Structures & Span of Control [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "pom-3",
            "number": 3,
            "title": "Leadership, Motivation & Group Dynamics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pom-3-1",
                    "title": "Motivation Theories: Maslow's Hierarchy, Herzberg's Two-Factor & Vroom's Expectancy [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pom-3-2",
                    "title": "Leadership Styles: Autocratic, Democratic, Laissez-Faire & Transformational [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pom-3-3",
                    "title": "Team Dynamics, Conflict Resolution Strategies & Organizational Change [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "pom-4",
            "number": 4,
            "title": "Controlling & Quality Management Systems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pom-4-1",
                    "title": "Control Systems: Feedforward, Concurrent & Feedback Control Loops [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pom-4-2",
                    "title": "Total Quality Management (TQM), Statistical Quality Control & Six Sigma (DMAIC) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pom-4-3",
                    "title": "ISO 9000 Certification Standards & Corporate Social Responsibility [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Software Engineering': [
        {
            "id": "se-1",
            "number": 1,
            "title": "Software Engineering Lifecycle Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-se-1-1",
                    "title": "Software Crisis, Characteristics of Software & SDLC Overview [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-1-2",
                    "title": "Classic Lifecycle: Waterfall, Prototyping, Evolutionary & Spiral Models [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-1-3",
                    "title": "Agile Development Paradigms: Scrum, Kanban, Extreme Programming (XP) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-1-4",
                    "title": "Project Feasibility & COCOMO Cost Estimation (Basic, Intermediate, Detailed) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "se-2",
            "number": 2,
            "title": "Requirements Engineering & Specifications",
            "category": "theory",
            "topics": [
                {
                    "id": "t-se-2-1",
                    "title": "Requirements Elicitation, Functional vs Non-Functional Requirements [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-2-2",
                    "title": "Software Requirements Specification (SRS) Document according to IEEE 830 [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-2-3",
                    "title": "Data Flow Diagrams (DFD Levels 0, 1, 2) & Data Dictionaries [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "se-3",
            "number": 3,
            "title": "Software Design, Architecture & UML Modeling",
            "category": "theory",
            "topics": [
                {
                    "id": "t-se-3-1",
                    "title": "Design Principles: Cohesion Types, Coupling Types & Information Hiding [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-3-2",
                    "title": "Function-Oriented vs Object-Oriented Software Design [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-3-3",
                    "title": "UML Modeling: Class Diagrams, Sequence Diagrams, Use Case & Activity Diagrams [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-3-4",
                    "title": "Architectural Design Patterns: Layered, Client-Server, MVC & Microservices [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "se-4",
            "number": 4,
            "title": "Software Verification, Validation & Testing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-se-4-1",
                    "title": "Black-Box Testing: Equivalence Partitioning, Boundary Value Analysis, Cause-Effect [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-4-2",
                    "title": "White-Box Testing: Basis Path Testing, Cyclomatic Complexity & Mutation Testing [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-4-3",
                    "title": "Testing Levels: Unit, Integration (Top-Down/Bottom-Up), System & Acceptance Testing [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-se-4-4",
                    "title": "Regression Testing, Automated Test Suites & Software Reliability Metrics [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "se-5",
            "number": 5,
            "title": "Project Management, Maintenance & CMMI",
            "category": "theory",
            "topics": [
                {
                    "id": "t-se-5-1",
                    "title": "Project Scheduling: PERT/CPM Critical Path, Gantt Charts & Resource Allocation [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-se-5-2",
                    "title": "Risk Management: Risk Identification, Assessment & Mitigation (RMMM Plan) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-se-5-3",
                    "title": "Software Maintenance: Corrective, Adaptive, Perfective, Reverse Engineering [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-se-5-4",
                    "title": "Software Quality Assurance, ISO 9001 & CMMI Capability Maturity Levels [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Object Oriented Programming using Java': [
        {
            "id": "java-1",
            "number": 1,
            "title": "Java Fundamentals, Bytecode & JVM Architecture",
            "category": "theory",
            "topics": [
                {
                    "id": "t-jav-1-1",
                    "title": "OOP Principles vs Structured Programming & Java Platform Independence [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-1-2",
                    "title": "JVM, JRE, JDK, Class Loader & Bytecode Execution Pipeline [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-1-3",
                    "title": "Primitive Data Types, Operators, Type Conversions & Control Flow Statements [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "java-2",
            "number": 2,
            "title": "Classes, Objects, Memory Model & Constructors",
            "category": "theory",
            "topics": [
                {
                    "id": "t-jav-2-1",
                    "title": "Class Definitions, Object Instantiation & Reference Variables [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-2-2",
                    "title": "Constructors: Default, Parameterized, Copy & Constructor Overloading [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-2-3",
                    "title": "The 'this' Keyword & Constructor Chaining [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-2-4",
                    "title": "Static Variables, Static Methods, Static Blocks & Singleton Pattern [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-jav-2-5",
                    "title": "Garbage Collection Mechanism, Heap Memory & finalize() Method [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "java-3",
            "number": 3,
            "title": "Strings, Arrays & Input/Output Handling",
            "category": "theory",
            "topics": [
                {
                    "id": "t-jav-3-1",
                    "title": "String Immutability, String Constant Pool & String Methods [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-3-2",
                    "title": "StringBuilder and StringBuffer: Mutable String Operations & Performance [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-3-3",
                    "title": "Single and Multidimensional Arrays, Jagged Arrays & Array Iteration [1L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-jav-3-4",
                    "title": "Java I/O: Scanner, BufferedReader, FileInputStream & FileOutputStream [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "java-4",
            "number": 4,
            "title": "Inheritance, Polymorphism & Interfaces",
            "category": "theory",
            "topics": [
                {
                    "id": "t-jav-4-1",
                    "title": "Inheritance Types (Single, Multilevel, Hierarchical) & 'super' Keyword [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-4-2",
                    "title": "Method Overriding, Dynamic Method Dispatch & Runtime Polymorphism [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-4-3",
                    "title": "Abstract Classes vs Concrete Classes, Final Classes & Methods [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-jav-4-4",
                    "title": "Interfaces, Multiple Inheritance & Default/Static Methods in Interfaces [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-jav-4-5",
                    "title": "Packages: Creating, Importing, CLASSPATH & Access Modifiers [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "java-5",
            "number": 5,
            "title": "Exception Handling, Multithreading & Collections",
            "category": "theory",
            "topics": [
                {
                    "id": "t-jav-5-1",
                    "title": "Exception Hierarchy, Checked vs Unchecked Exceptions, try-catch-finally [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-jav-5-2",
                    "title": "throw, throws, Custom User-Defined Exception Classes [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-5-3",
                    "title": "Multithreading: Thread Class, Runnable Interface & Thread Lifecycle [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-jav-5-4",
                    "title": "Thread Synchronization, Inter-thread Communication (wait, notify) & Deadlocks [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-jav-5-5",
                    "title": "Java Collections Framework: List, Set, Map, Generics & Iterators [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Compiler Design': [
        {
            "id": "cd-1",
            "number": 1,
            "title": "Lexical Analysis & Language Processors",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cd-1-1",
                    "title": "Phases of a Compiler, Cousins of the Compiler (Preprocessor, Assembler, Linker) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-1-2",
                    "title": "Lexical Analyzer Role, Tokens, Patterns, Lexemes & Input Buffering [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-1-3",
                    "title": "Regular Expressions, Conversion to NFA (Thompson's Construction) & NFA to DFA [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-1-4",
                    "title": "Lex Tool Architecture & Lexical Analyzer Generation [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cd-2",
            "number": 2,
            "title": "Syntax Analysis & Parsing Algorithms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cd-2-1",
                    "title": "Context-Free Grammars, Derivations, Ambiguity & Left Recursion Elimination [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-2-2",
                    "title": "Top-Down Parsing: Recursive Descent Parsing, LL(1) Grammars & Parse Tables [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-2-3",
                    "title": "Bottom-Up Parsing: Shift-Reduce, Handle Pruning & Operator Precedence [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-2-4",
                    "title": "LR Parsers: SLR(1), Canonical LR(1) & LALR(1) Parsing Table Construction [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cd-2-5",
                    "title": "YACC Parser Generator & Parser Error Recovery Strategies [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cd-3",
            "number": 3,
            "title": "Semantic Analysis & Syntax-Directed Translation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cd-3-1",
                    "title": "Syntax-Directed Definitions (SDD): S-Attributed & L-Attributed Definitions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-3-2",
                    "title": "Syntax Trees, Evaluation of Semantic Rules & Dependency Graphs [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-3-3",
                    "title": "Type Checking, Type Systems & Type Equivalence [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cd-3-4",
                    "title": "Symbol Table Organizations: Hash Tables, Scope Management & Activation Records [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cd-4",
            "number": 4,
            "title": "Intermediate Code Generation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cd-4-1",
                    "title": "Intermediate Representations: Syntax Trees, Postfix Notation & Three-Address Code [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-4-2",
                    "title": "Three-Address Code Implementations: Quadruples, Triples & Indirect Triples [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-4-3",
                    "title": "Translation of Expressions, Boolean Statements & Control Flow Backpatching [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cd-5",
            "number": 5,
            "title": "Code Optimization & Code Generation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cd-5-1",
                    "title": "Principal Sources of Optimization: Common Subexpressions, Dead Code, Loop Invariants [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cd-5-2",
                    "title": "Basic Blocks, Flow Graphs & DAG Representation of Basic Blocks [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cd-5-3",
                    "title": "Data Flow Analysis & Global Optimization Equations [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cd-5-4",
                    "title": "Target Code Generation, Register Allocation (Graph Coloring) & Peephole Optimization [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Cryptography and Network Security': [
        {
            "id": "cns-1",
            "number": 1,
            "title": "Classical Ciphers & Number Theory",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cns-1-1",
                    "title": "Security Attacks, Services and Mechanisms (CIA Triad, OSI Security Architecture) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-1-2",
                    "title": "Classical Encryption: Substitution (Caesar, Playfair, Hill, Vigenere) & Transposition [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-1-3",
                    "title": "Divisibility, Euclidean & Extended Euclidean Algorithm, Modular Arithmetic [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-1-4",
                    "title": "Prime Numbers, Fermat's & Euler's Totient Theorem, Chinese Remainder Theorem [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cns-2",
            "number": 2,
            "title": "Symmetric & Asymmetric Cryptosystems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cns-2-1",
                    "title": "Block Cipher Principles, Feistel Structure, Data Encryption Standard (DES) & 3DES [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-2-2",
                    "title": "Advanced Encryption Standard (AES) Architecture, S-Box & Round Transformations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-2-3",
                    "title": "Cipher Modes of Operation: ECB, CBC, CFB, OFB & CTR Modes [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-2-4",
                    "title": "Public Key Cryptography: RSA Algorithm, Mathematical Formulation & Security [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cns-2-5",
                    "title": "Diffie-Hellman Key Exchange, Man-in-the-Middle Attack & Elliptic Curve Cryptography [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cns-3",
            "number": 3,
            "title": "Cryptographic Hash Functions & Digital Signatures",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cns-3-1",
                    "title": "Cryptographic Hash Properties, Collision Resistance & Birthday Attack [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-3-2",
                    "title": "SHA-256 Algorithm Architecture & Message Processing [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-3-3",
                    "title": "Message Authentication Codes (MAC) & HMAC Protocol [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-3-4",
                    "title": "Digital Signatures: RSA Signatures & Digital Signature Standard (DSS/DSA) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cns-4",
            "number": 4,
            "title": "Key Management, Authentication & Firewalls",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cns-4-1",
                    "title": "Kerberos Authentication Service & Ticket-Granting System [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-4-2",
                    "title": "X.509 Public Key Certificates & Certificate Revocation Lists (CRL) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-4-3",
                    "title": "Firewalls: Packet Filtering, Stateful Inspection, Application Gateways & DMZ [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cns-4-4",
                    "title": "Intrusion Detection Systems (IDS/IPS), Honeypots & Threat Mitigation [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cns-5",
            "number": 5,
            "title": "Network Security Protocols (IPSec, SSL/TLS, Email)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cns-5-1",
                    "title": "IP Security (IPSec): Architecture, AH, ESP & IKE Protocol [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cns-5-2",
                    "title": "Transport Layer Security: SSL/TLS Handshake Protocol & Record Protocol [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cns-5-3",
                    "title": "Electronic Mail Security: Pretty Good Privacy (PGP) & S/MIME [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Computer Graphics': [
        {
            "id": "cg-1",
            "number": 1,
            "title": "Graphics Hardware, Display Devices & Raster Systems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cg-1-1",
                    "title": "Display Devices: Refresh CRT, Raster Scan vs Random Scan Displays [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cg-1-2",
                    "title": "Color CRT Monitors, Shadow Mask, Flat-Panel Displays (LCD, LED, OLED) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-1-3",
                    "title": "Frame Buffers, Color Look-up Tables & Video Controllers [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cg-2",
            "number": 2,
            "title": "Scan Conversion & Rasterization Algorithms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cg-2-1",
                    "title": "DDA Line Drawing Algorithm: Mathematical Derivation & Implementation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cg-2-2",
                    "title": "Bresenham's Integer Line Drawing Algorithm [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-2-3",
                    "title": "Midpoint Circle Generation Algorithm & Midpoint Ellipse Algorithm [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-2-4",
                    "title": "Polygon Fill Algorithms: Scan-Line Polygon Fill, Boundary Fill, Flood Fill [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cg-3",
            "number": 3,
            "title": "2D & 3D Geometric Transformations",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cg-3-1",
                    "title": "2D Transformations: Translation, Rotation, Scaling, Reflection, Shear [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cg-3-2",
                    "title": "Homogeneous Coordinates & Matrix Representation of Composite Transformations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-3-3",
                    "title": "3D Transformations: Translation, Rotation about Arbitrary Axis, Scaling & Reflection [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cg-4",
            "number": 4,
            "title": "2D Viewing, Window-to-Viewport & Clipping",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cg-4-1",
                    "title": "Viewing Pipeline & Window-to-Viewport Coordinate Mapping [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cg-4-2",
                    "title": "Cohen-Sutherland Line Clipping Algorithm [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-4-3",
                    "title": "Liang-Barsky Line Clipping Algorithm [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-4-4",
                    "title": "Sutherland-Hodgman Polygon Clipping Algorithm [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cg-5",
            "number": 5,
            "title": "3D Projections, Hidden Surfaces & Shading Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cg-5-1",
                    "title": "Projections: Parallel (Orthographic, Oblique) vs Perspective Projections [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cg-5-2",
                    "title": "Visible Surface Detection: Depth-Buffer (Z-Buffer) & A-Buffer Algorithms [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cg-5-3",
                    "title": "Back-Face Culling & Binary Space Partitioning (BSP) Tree [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cg-5-4",
                    "title": "Illumination Models (Ambient, Diffuse, Specular) & Shading (Gouraud, Phong) [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Data Handling and Visualization': [
        {
            "id": "dhv-1",
            "number": 1,
            "title": "Python Data Ecosystem & Exploratory Analysis",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dhv-1-1",
                    "title": "Python for Data Science, Jupyter Notebook & IPython Shell Environment [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dhv-1-2",
                    "title": "NumPy: ndarray Creation, Indexing, Slicing, Broadcasting & Vectorized Math [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dhv-1-3",
                    "title": "Exploratory Data Analysis (EDA) Workflow: Summary Stats, Skewness, Outliers [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "dhv-2",
            "number": 2,
            "title": "Data Manipulation & Cleaning with Pandas",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dhv-2-1",
                    "title": "Pandas Series & DataFrame: Indexing, Slicing, loc, iloc & Filtering [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dhv-2-2",
                    "title": "Data Ingestion: Reading/Writing CSV, Excel, JSON, Parquet & SQL Data [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-2-3",
                    "title": "Data Cleaning: Handling Missing Values (dropna, fillna) & Duplicates [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-2-4",
                    "title": "String Operations, Regex Pattern Matching & Categorical Data Optimization [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dhv-3",
            "number": 3,
            "title": "Data Wrangling, Reshaping & Time Series",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dhv-3-1",
                    "title": "Data Merging: Merge, Concat, Join & Hierarchical Multi-Indexing [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dhv-3-2",
                    "title": "Pivoting, Melting, Stack, Unstack & Cross-Tabulations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-3-3",
                    "title": "GroupBy Operations: Split-Apply-Combine & Aggregation Pipelines [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-3-4",
                    "title": "Time Series Analysis: Date Ranges, Rolling Windows, Resampling & Shifts [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dhv-4",
            "number": 4,
            "title": "Visualization Principles & Matplotlib/Seaborn",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dhv-4-1",
                    "title": "Grammar of Graphics, Visual Perception & Color Palettes [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dhv-4-2",
                    "title": "Matplotlib Architecture: Figure, Axes, Line Plots, Scatter Plots, Bar Charts [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-4-3",
                    "title": "Statistical Visualization with Seaborn: Histograms, KDE, Boxplots, Violin Plots [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dhv-4-4",
                    "title": "Multi-Variate Plots: Heatmaps, Pairplots, FacetGrids & Interactive Dashboards [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Soft Computing': [
        {
            "id": "sc-1",
            "number": 1,
            "title": "Soft Computing Paradigms & Fuzzy Sets",
            "category": "theory",
            "topics": [
                {
                    "id": "t-sc-1-1",
                    "title": "Hard Computing vs Soft Computing, Tolerance for Imprecision & Uncertainty [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-1-2",
                    "title": "Classical Sets vs Fuzzy Sets: Membership Functions, Height, Support, Core [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-1-3",
                    "title": "Fuzzy Set Operations: Union, Intersection, Complement, Algebraic Operations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-sc-1-4",
                    "title": "Fuzzy Relations, Composition of Fuzzy Relations (Max-Min, Max-Product) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "sc-2",
            "number": 2,
            "title": "Fuzzy Logic & Fuzzy Inference Systems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-sc-2-1",
                    "title": "Linguistic Variables, Fuzzy Rules & Approximate Reasoning [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-2-2",
                    "title": "Fuzzy Inference Systems: Mamdani & Takagi-Sugeno Models [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-sc-2-3",
                    "title": "Defuzzification Techniques: Centroid Method, Mean of Maxima, Bisector Method [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "sc-3",
            "number": 3,
            "title": "Artificial Neural Networks & Learning Algorithms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-sc-3-1",
                    "title": "Biological Neurons, Artificial Neurons, Activation Functions & Perceptron Model [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-3-2",
                    "title": "Multilayer Perceptron (MLP) & Backpropagation Learning Algorithm [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-sc-3-3",
                    "title": "Radial Basis Function (RBF) Networks & Competitive Learning Networks [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-sc-3-4",
                    "title": "Kohonen Self-Organizing Feature Maps (SOM) Architecture [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "sc-4",
            "number": 4,
            "title": "Genetic Algorithms & Evolutionary Computing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-sc-4-1",
                    "title": "Biological Evolution Fundamentals, Chromosomes, Genes & Fitness Functions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-4-2",
                    "title": "Genetic Operators: Selection (Roulette Wheel, Tournament), Crossover & Mutation [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-sc-4-3",
                    "title": "Schema Theorem & Convergence Criteria of Genetic Algorithms [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "sc-5",
            "number": 5,
            "title": "Hybrid Intelligent Systems (Neuro-Fuzzy & Swarm)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-sc-5-1",
                    "title": "Adaptive Neuro-Fuzzy Inference Systems (ANFIS) Architecture & Learning [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-sc-5-2",
                    "title": "Genetic Neuro-Hybrid Systems for Neural Architecture Search [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-sc-5-3",
                    "title": "Swarm Intelligence: Particle Swarm Optimization (PSO) Principles [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Project Management & Finance': [
        {
            "id": "pmf-1",
            "number": 1,
            "title": "Project Lifecycle, Feasibility & Appraisal",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pmf-1-1",
                    "title": "Project Definition, Scope, Characteristics & Project Life Cycle Phases [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pmf-1-2",
                    "title": "Pre-Feasibility & Comprehensive Feasibility Studies (Technical, Market, Financial) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pmf-1-3",
                    "title": "Work Breakdown Structure (WBS) & Responsibility Assignment Matrix (RACI) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "pmf-2",
            "number": 2,
            "title": "Project Scheduling & Network Analysis (PERT/CPM)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pmf-2-1",
                    "title": "Activity Network Diagrams: Activity on Node (AON) & Activity on Arrow (AOA) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pmf-2-2",
                    "title": "Critical Path Method (CPM): Earliest/Latest Event Times & Total/Free Floats [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pmf-2-3",
                    "title": "PERT Probabilistic Model: 3-Time Estimates, Expected Time & Project Variance [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pmf-2-4",
                    "title": "Project Crashing: Direct vs Indirect Costs, Cost Slope & Optimum Duration [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "pmf-3",
            "number": 3,
            "title": "Financial Management & Capital Budgeting",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pmf-3-1",
                    "title": "Time Value of Money: Present Value, Future Value & Compounding Interest [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pmf-3-2",
                    "title": "Capital Budgeting: Payback Period & Accounting Rate of Return (ARR) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pmf-3-3",
                    "title": "Discounted Cash Flow: Net Present Value (NPV), Internal Rate of Return (IRR) & PI [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "pmf-4",
            "number": 4,
            "title": "Working Capital, Balance Sheets & Cost Control",
            "category": "theory",
            "topics": [
                {
                    "id": "t-pmf-4-1",
                    "title": "Financial Statements Overview: Balance Sheet, Profit & Loss Statements [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-pmf-4-2",
                    "title": "Working Capital Management: Operating Cycle & Current Asset Financing [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-pmf-4-3",
                    "title": "Break-Even Analysis, Contribution Margin & Margin of Safety [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Web and Internet Technology': [
        {
            "id": "wit-1",
            "number": 1,
            "title": "Internet Architecture, Protocols & Web Standards",
            "category": "theory",
            "topics": [
                {
                    "id": "t-wit-1-1",
                    "title": "World Wide Web Architecture, Web Clients, Web Servers & Dynamic IP [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-wit-1-2",
                    "title": "HTTP/HTTPS Request-Response Lifecycle, Status Codes & Headers [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-wit-1-3",
                    "title": "Web Site Design Principles, Navigation Planning & Information Architecture [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "wit-2",
            "number": 2,
            "title": "HTML5, CSS3, Responsive Design & DOM",
            "category": "theory",
            "topics": [
                {
                    "id": "t-wit-2-1",
                    "title": "HTML5 Semantic Elements, Forms, Input Validation & Media Tags [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-wit-2-2",
                    "title": "CSS3 Styling: Box Model, Flexbox, Grid Layouts & Media Queries [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-wit-2-3",
                    "title": "Document Object Model (DOM) Tree Manipulation & Event Bubbling [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-wit-2-4",
                    "title": "XML Document Structure, DTD, XML Schema & XML DOM Parsing [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "wit-3",
            "number": 3,
            "title": "Client-Side Scripting with Modern JavaScript",
            "category": "theory",
            "topics": [
                {
                    "id": "t-wit-3-1",
                    "title": "JavaScript Language Syntax: Variables, Closures, Hoisting & Arrow Functions [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-wit-3-2",
                    "title": "Asynchronous JavaScript: Promises, async/await & Fetch API [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-wit-3-3",
                    "title": "Event Handling, Form Validation & Browser Object Model (BOM) [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-wit-3-4",
                    "title": "JSON Serialization, LocalStorage, SessionStorage & IndexedDB [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "wit-4",
            "number": 4,
            "title": "Server-Side Web Development & RESTful APIs",
            "category": "theory",
            "topics": [
                {
                    "id": "t-wit-4-1",
                    "title": "Server Architecture: CGI, Servlets Life Cycle & JSP Directives [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-wit-4-2",
                    "title": "Session Management: Cookies, URL Rewriting & HttpSession [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-wit-4-3",
                    "title": "Database Connectivity: JDBC Architecture, Prepared Statements & Connection Pools [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-wit-4-4",
                    "title": "RESTful API Design: Endpoints, HTTP Verbs, Idempotence & JWT Authentication [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Deep Learning': [
        {
            "id": "dl-1",
            "number": 1,
            "title": "Neural Networks & Vectorized Optimization",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dl-1-1",
                    "title": "Supervised Learning with Neural Networks & Binary Classification [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-1-2",
                    "title": "Logistic Regression Cost Function & Gradient Descent Derivation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-1-3",
                    "title": "Computation Graphs, Forward Propagation & Backpropagation Calculus [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dl-1-4",
                    "title": "Vectorization across Multiple Training Examples with NumPy/PyTorch [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dl-2",
            "number": 2,
            "title": "Deep Neural Network Architectures & Optimization",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dl-2-1",
                    "title": "Deep Architecture Representation & Non-Linear Activations (ReLU, Leaky ReLU, GELU) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-2-2",
                    "title": "Weight Initialization Strategies: He, Xavier/Glorot & Vanishing/Exploding Gradients [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dl-2-3",
                    "title": "Optimization Algorithms: Mini-Batch Gradient Descent, Momentum, RMSProp, Adam [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-dl-2-4",
                    "title": "Regularization in Deep Learning: L2 Weight Decay, Dropout & Batch Normalization [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dl-3",
            "number": 3,
            "title": "Convolutional Neural Networks (CNN) for Computer Vision",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dl-3-1",
                    "title": "Convolution Operation, Padding, Stride & Feature Map Dimensions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-3-2",
                    "title": "Pooling Layers (Max, Average) & Fully Connected Classification Layers [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dl-3-3",
                    "title": "Classic CNN Architectures: LeNet-5, AlexNet, VGG-16, ResNet (Skip Connections) [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-dl-3-4",
                    "title": "Transfer Learning, Data Augmentation & Object Detection (YOLO, Faster R-CNN) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dl-4",
            "number": 4,
            "title": "Recurrent Neural Networks (RNN) & Sequence Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dl-4-1",
                    "title": "Recurrent Network Architecture & Backpropagation Through Time (BPTT) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-4-2",
                    "title": "Vanishing Gradients in RNNs, Gated Recurrent Units (GRU) & LSTM Networks [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dl-4-3",
                    "title": "Bidirectional RNNs & Deep Recurrent Sequence-to-Sequence Modeling [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "dl-5",
            "number": 5,
            "title": "Attention Mechanisms, Transformers & Generative Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-dl-5-1",
                    "title": "Attention Mechanism, Scaled Dot-Product Attention & Self-Attention [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-dl-5-2",
                    "title": "Transformer Architecture: Encoder-Decoder, Multi-Head Attention & Positional Encoding [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-dl-5-3",
                    "title": "Autoencoders (Sparse, Denoising, Variational VAEs) [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-dl-5-4",
                    "title": "Generative Adversarial Networks (GANs): Generator-Discriminator Minimax Game [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Image Processing': [
        {
            "id": "ip-1",
            "number": 1,
            "title": "Digital Image Fundamentals & Mathematical Preliminaries",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ip-1-1",
                    "title": "Digital Image Representation, Pixels, Gray Levels & Sampling/Quantization [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-1-2",
                    "title": "Pixel Relationships: Neighbors, Adjacency, Connectivity, Distance Measures [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-1-3",
                    "title": "Color Models: RGB, CMYK, HSI, YCbCr & Pseudo-Color Processing [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "ip-2",
            "number": 2,
            "title": "Image Enhancement in Spatial & Frequency Domain",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ip-2-1",
                    "title": "Gray Level Transformations: Contrast Stretching, Log Transform, Power-Law (Gamma) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-2-2",
                    "title": "Histogram Processing: Equalization, Specification & Local Enhancement [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ip-2-3",
                    "title": "Spatial Filtering: Smoothing Filters (Mean, Median) & Sharpening (Laplacian, Sobel) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ip-2-4",
                    "title": "Frequency Domain Filtering: 2D DFT, Ideal, Butterworth & Gaussian Lowpass/Highpass [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ip-3",
            "number": 3,
            "title": "Image Restoration & Degradation Modeling",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ip-3-1",
                    "title": "Image Degradation Model & Noise Models (Gaussian, Salt-and-Pepper) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-3-2",
                    "title": "Inverse Filtering & Wiener Filtering for Blur Removal [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ip-3-3",
                    "title": "Constrained Least Squares Restoration & Geometric Transformations [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ip-4",
            "number": 4,
            "title": "Image Segmentation & Morphological Operations",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ip-4-1",
                    "title": "Edge Detection: Sobel, Prewitt, Roberts & Canny Edge Detection Algorithm [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-4-2",
                    "title": "Hough Transform for Line and Circle Detection [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ip-4-3",
                    "title": "Thresholding Techniques: Global, Adaptive & Otsu's Optimum Thresholding [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ip-4-4",
                    "title": "Morphological Operations: Dilation, Erosion, Opening, Closing & Boundary Extraction [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ip-5",
            "number": 5,
            "title": "Image Compression & Feature Extraction",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ip-5-1",
                    "title": "Redundancies in Images: Coding, Interpixel & Psychovisual Redundancy [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ip-5-2",
                    "title": "Lossless Compression: Huffman Coding, Run-Length Coding, LZW & Arithmetic Coding [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ip-5-3",
                    "title": "Lossy Compression: Transform Coding, DCT & JPEG Standard Architecture [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Cloud Computing': [
        {
            "id": "cc-1",
            "number": 1,
            "title": "Cloud Computing Principles & Service Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cc-1-1",
                    "title": "NIST Cloud Definition, Essential Characteristics & Economic Drivers [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cc-1-2",
                    "title": "Service Models: Infrastructure as a Service (IaaS), PaaS & SaaS [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cc-1-3",
                    "title": "Deployment Models: Public, Private, Community & Hybrid Clouds [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cc-1-4",
                    "title": "Service Level Agreements (SLAs) & Elastic Resource Management [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cc-2",
            "number": 2,
            "title": "Virtualization Technologies & Hypervisors",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cc-2-1",
                    "title": "Virtualization Concept: Full Virtualization, Para-Virtualization & OS-Level Containers [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cc-2-2",
                    "title": "Type-1 vs Type-2 Hypervisors (KVM, Xen, VMware ESXi, VirtualBox) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cc-2-3",
                    "title": "Virtual Machine Life Cycle, Live Migration & OVF Packaging [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cc-3",
            "number": 3,
            "title": "Cloud Storage, Compute & Containers",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cc-3-1",
                    "title": "Cloud Storage Models: Object Storage (S3), Block Storage (EBS) & File Systems [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cc-3-2",
                    "title": "Compute Scaling: Auto-scaling Groups, Load Balancers (ELB, NGINX) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cc-3-3",
                    "title": "Containerization: Docker Containers, Images, Dockerfile & Microservices [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-cc-3-4",
                    "title": "Container Orchestration: Kubernetes Pods, Deployments & Service Discovery [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cc-4",
            "number": 4,
            "title": "Cloud Security, Identity & Serverless Computing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cc-4-1",
                    "title": "Cloud Security Shared Responsibility Model, Data Isolation & Encryption at Rest/Transit [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cc-4-2",
                    "title": "Identity & Access Management (IAM): Roles, Policies, MFA & SSO [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cc-4-3",
                    "title": "Serverless Architecture (FaaS): AWS Lambda, Event-Driven Triggers & Cloud Functions [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Big Data and Data Analytics': [
        {
            "id": "bda-1",
            "number": 1,
            "title": "Big Data Architecture & Distributed Storage (Hadoop)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bda-1-1",
                    "title": "Characteristics of Big Data: 5 V's (Volume, Velocity, Variety, Veracity, Value) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bda-1-2",
                    "title": "Hadoop Distributed File System (HDFS): NameNode, DataNode, Block Replication [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bda-1-3",
                    "title": "Hadoop Ecosystem Overview: YARN Resource Manager, Hive, Pig, HBase [3L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "bda-2",
            "number": 2,
            "title": "Distributed Processing with MapReduce & Spark",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bda-2-1",
                    "title": "MapReduce Programming Model: Mapper, Reducer, Combiner, Partitioner [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bda-2-2",
                    "title": "Word Count and Matrix Multiplication using MapReduce Execution [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bda-2-3",
                    "title": "Apache Spark Architecture: Resilient Distributed Datasets (RDDs), Transformations & Actions [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bda-2-4",
                    "title": "Spark DataFrames, Spark SQL & In-Memory Distributed Computation [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bda-3",
            "number": 3,
            "title": "NoSQL Databases & Big Data Storage Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bda-3-1",
                    "title": "Limitations of RDBMS & The CAP Theorem in Distributed Databases [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bda-3-2",
                    "title": "Key-Value Stores (Redis) & Document Stores (MongoDB CRUD Operations) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bda-3-3",
                    "title": "Column-Family Databases (Apache Cassandra, HBase) & Graph Databases (Neo4j) [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bda-4",
            "number": 4,
            "title": "Stream Analytics & Big Data Visualization",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bda-4-1",
                    "title": "Real-Time Streaming Systems: Publish-Subscribe Messaging with Apache Kafka [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bda-4-2",
                    "title": "Stream Processing Engines: Spark Streaming & Sliding Window Computations [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bda-4-3",
                    "title": "Big Data Analytics Reporting, Dashboards & Visual Deliverables [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Natural Language Processing': [
        {
            "id": "nlp-1",
            "number": 1,
            "title": "Linguistic Foundations & Text Preprocessing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-nlp-1-1",
                    "title": "Phases of NLP, Ambiguity in Natural Language & Text Corpora [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-nlp-1-2",
                    "title": "Tokenization, Stemming (Porter, Snowball) & Lemmatization (WordNet) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-nlp-1-3",
                    "title": "Part-of-Speech (POS) Tagging: Hidden Markov Models (HMM) & Viterbi Algorithm [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-nlp-1-4",
                    "title": "Named Entity Recognition (NER), Chunking & Regular Expression Matching [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "nlp-2",
            "number": 2,
            "title": "Language Modeling & Vector Representation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-nlp-2-1",
                    "title": "N-gram Language Models, Perplexity Evaluation & Smoothing Techniques [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-nlp-2-2",
                    "title": "Vector Space Models: Bag-of-Words (BoW) & TF-IDF Weighting Formulation [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-nlp-2-3",
                    "title": "Distributed Representations: Word2Vec (CBOW vs Skip-Gram) & GloVe [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "nlp-3",
            "number": 3,
            "title": "Text Classification, Sentiment Analysis & Parsing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-nlp-3-1",
                    "title": "Text Classification using Naive Bayes, Support Vector Machines & RNNs [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-nlp-3-2",
                    "title": "Sentiment Analysis: Lexicon-Based Approaches vs Supervised Deep Models [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-nlp-3-3",
                    "title": "Syntactic Parsing: Context-Free Grammars, CYK Parsing & Dependency Parsing [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "nlp-4",
            "number": 4,
            "title": "Sequence-to-Sequence Models & Modern Transformers",
            "category": "theory",
            "topics": [
                {
                    "id": "t-nlp-4-1",
                    "title": "Seq2Seq Encoder-Decoder with RNNs/LSTMs & Beam Search Decoding [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-nlp-4-2",
                    "title": "Attention Mechanism (Bahdanau & Luong) & Alignment Visualization [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-nlp-4-3",
                    "title": "Pre-trained Language Models: BERT (Masked LM) & GPT (Autoregressive LM) [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-nlp-4-4",
                    "title": "Downstream NLP Applications: Machine Translation, Question Answering, Chatbots [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Mobile Computing': [
        {
            "id": "mc-1",
            "number": 1,
            "title": "Cellular Networks & Wireless Architecture",
            "category": "theory",
            "topics": [
                {
                    "id": "t-mc-1-1",
                    "title": "Cellular Architecture: Frequency Reuse, Cell Splitting & Sectoring [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-mc-1-2",
                    "title": "Generational Evolution: 1G to 4G LTE & 5G Standalone Architecture [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-mc-1-3",
                    "title": "Handoff Management: Hard, Soft Handoff & Channel Assignment Schemes [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "mc-2",
            "number": 2,
            "title": "Wireless Communications & Mobile IP",
            "category": "theory",
            "topics": [
                {
                    "id": "t-mc-2-1",
                    "title": "Mobile IP: Home Agent, Foreign Agent, Care-of-Address & Tunneling [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-mc-2-2",
                    "title": "IEEE 802.11 Wi-Fi Architecture, Power Saving Mode & Bluetooth Piconets [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-mc-2-3",
                    "title": "Mobile Transport Layer: Indirect TCP, Snooping TCP & Mobile TCP [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "mc-3",
            "number": 3,
            "title": "Mobile Ad-Hoc Networks (MANET) & Routing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-mc-3-1",
                    "title": "MANET Properties, Challenges & Energy-Aware MAC Protocols [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-mc-3-2",
                    "title": "Proactive Routing (DSDV) vs Reactive Routing (DSR, AODV) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-mc-3-3",
                    "title": "Hybrid Routing (ZRP) & Geographic/Location-Based Routing [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "mc-4",
            "number": 4,
            "title": "Mobile Application Frameworks & Security",
            "category": "theory",
            "topics": [
                {
                    "id": "t-mc-4-1",
                    "title": "Android OS Architecture, Activities, Services, Intents & Broadcast Receivers [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-mc-4-2",
                    "title": "Location-Based Services (GPS, Triangulation, Cell-ID) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-mc-4-3",
                    "title": "Security Challenges in Mobile Devices: App Sandboxing, Permissions & Malware [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Human Computer Interaction': [
        {
            "id": "hci-1",
            "number": 1,
            "title": "Foundations of Human-Computer Interaction",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hci-1-1",
                    "title": "Definition, Scope & History of Human-Computer Interaction [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hci-1-2",
                    "title": "Human Cognition, Memory, Perception, Motor Skills & Norman's Action Cycle [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hci-1-3",
                    "title": "Interaction Styles: Command-Line, GUI, Direct Manipulation, Voice Interfaces [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "hci-2",
            "number": 2,
            "title": "User-Centered Design & Prototyping",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hci-2-1",
                    "title": "User-Centered Design (UCD) Process & Contextual Inquiry [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hci-2-2",
                    "title": "User Personas, Empathy Mapping, Scenarios & Storyboards [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hci-2-3",
                    "title": "Low-Fidelity (Paper, Wireframes) vs High-Fidelity Interactive Prototyping (Figma) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hci-3",
            "number": 3,
            "title": "Usability Evaluation & Design Guidelines",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hci-3-1",
                    "title": "Nielsen's 10 Usability Heuristics & Heuristic Evaluation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hci-3-2",
                    "title": "Cognitive Walkthroughs & User Testing Metrics (SUS, Task Completion Time) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hci-3-3",
                    "title": "A/B Testing Methodologies & Statistical Significance [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-hci-3-4",
                    "title": "Web Accessibility Guidelines (WCAG), Universal Design & Assistive Tech [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'E-Commerce and Digital Business Model': [
        {
            "id": "ec-1",
            "number": 1,
            "title": "E-Commerce Frameworks & Business Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ec-1-1",
                    "title": "E-Commerce Evolution, Traditional vs Electronic Commerce & Infrastructure [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ec-1-2",
                    "title": "Major Business Models: B2B, B2C, C2C, C2B & Platform Marketplace Economy [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ec-1-3",
                    "title": "Value Propositions, Revenue Models (Subscription, Freemium, Affiliate) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "ec-2",
            "number": 2,
            "title": "Electronic Payment Systems & Infrastructure",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ec-2-1",
                    "title": "Online Payment Architectures, Payment Gateways & Aggregators [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ec-2-2",
                    "title": "Digital Wallets, Net Banking, Unified Payments Interface (UPI) Protocols [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ec-2-3",
                    "title": "PCI-DSS Compliance, SSL/TLS Encryption & Fraud Prevention Systems [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ec-3",
            "number": 3,
            "title": "Digital Marketing, SEO, CRM & Cyber Laws",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ec-3-1",
                    "title": "Digital Marketing Strategies, Search Engine Optimization (SEO) & SEM [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ec-3-2",
                    "title": "Customer Relationship Management (CRM) & Recommendation Engines [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ec-3-3",
                    "title": "Information Technology Act 2000, Digital Contracts & Consumer Protection Laws [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Quantum Computing': [
        {
            "id": "qc-1",
            "number": 1,
            "title": "Quantum Mechanics Principles & Qubit States",
            "category": "theory",
            "topics": [
                {
                    "id": "t-qc-1-1",
                    "title": "Classical vs Quantum Information, Qubit Definition & State Vectors [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-qc-1-2",
                    "title": "Superposition Principle & Bloch Sphere Geometric Representation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-qc-1-3",
                    "title": "Quantum Measurement Postulates & State Collapse [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-qc-1-4",
                    "title": "Multiple Qubits, Tensor Products & Quantum Entanglement (Bell States) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "qc-2",
            "number": 2,
            "title": "Quantum Gates, Circuits & Reversibility",
            "category": "theory",
            "topics": [
                {
                    "id": "t-qc-2-1",
                    "title": "Single Qubit Unitary Gates: Pauli-X, Y, Z, Hadamard, Phase & T Gates [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-qc-2-2",
                    "title": "Multi-Qubit Controlled Gates: CNOT, SWAP, Toffoli (CCNOT) & Fredkin Gate [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-qc-2-3",
                    "title": "Universal Quantum Gate Sets & Quantum Circuit Decomposition [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-qc-2-4",
                    "title": "No-Cloning Theorem & Quantum Teleportation Protocol [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "qc-3",
            "number": 3,
            "title": "Fundamental Quantum Algorithms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-qc-3-1",
                    "title": "Deutsch's Algorithm & Deutsch-Jozsa Algorithm for Constant/Balanced Functions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-qc-3-2",
                    "title": "Bernstein-Vazirani Algorithm & Simon's Periodicity Problem [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-qc-3-3",
                    "title": "Quantum Fourier Transform (QFT): Circuit Formulation & Complexity [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-qc-3-4",
                    "title": "Shor's Factoring Algorithm: Order Finding & Cryptographic Implications [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-qc-3-5",
                    "title": "Grover's Search Algorithm: Amplitude Amplification & Quadratic Speedup [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "qc-4",
            "number": 4,
            "title": "Error Correction, Decoherence & Hardware Platforms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-qc-4-1",
                    "title": "Quantum Noise Channels: Bit Flip, Phase Flip & Depolarizing Channel [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-qc-4-2",
                    "title": "Shor 9-Qubit Quantum Error Correcting Code & Steane Code [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-qc-4-3",
                    "title": "Hardware Technologies: Superconducting Qubits, Trapped Ions & Photonic Systems [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Cyber Law and Ethics': [
        {
            "id": "cle-1",
            "number": 1,
            "title": "Cybercrime Taxonomy & Attack Methodologies",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cle-1-1",
                    "title": "Definition & Evolution of Cybercrime: Hacking, Forgery, Software Piracy [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cle-1-2",
                    "title": "Passive vs Active Attacks, Denial of Service (DoS/DDoS) & Phishing [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cle-1-3",
                    "title": "Malware Analysis: Viruses, Worms, Trojan Horses, Spyware & Ransomware [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "cle-2",
            "number": 2,
            "title": "Information Technology Act & Regulatory Frameworks",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cle-2-1",
                    "title": "Overview of Indian IT Act 2000 & 2008 Amendments: Objectives & Scope [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cle-2-2",
                    "title": "Electronic Governance, Digital Signatures & Certifying Authorities [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cle-2-3",
                    "title": "Cyber Offences: Penalties, Adjudication, Appellate Tribunal & Cyber Jurisdiction [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "cle-3",
            "number": 3,
            "title": "Data Privacy, IPR & Information Security Ethics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-cle-3-1",
                    "title": "Intellectual Property Rights in Cyberspace: Software Patents, Copyrights & Trademarks [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-cle-3-2",
                    "title": "Digital Personal Data Protection (DPDP) Act & International Privacy Standards (GDPR) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-cle-3-3",
                    "title": "Professional Ethics in Computing, ACM/IEEE Code of Ethics & Whistleblowing [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Distributed Systems': [
        {
            "id": "ds-1",
            "number": 1,
            "title": "Characterization & System Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ds-1-1",
                    "title": "Introduction to Distributed Systems: Goals, Challenges, Hardware & Software Concepts [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-1-2",
                    "title": "Architectural Models: Client-Server, Peer-to-Peer, Tiered Architectures [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-1-3",
                    "title": "Interaction & Failure Models in Distributed Systems [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "ds-2",
            "number": 2,
            "title": "Inter-Process Communication & Remote Invocation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ds-2-1",
                    "title": "Networking Protocols, Socket Communication & Datagram Messaging [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-2-2",
                    "title": "Remote Procedure Call (RPC): Client/Server Stubs, Marshalling & Semantics [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ds-2-3",
                    "title": "Remote Method Invocation (RMI) in Java & Distributed Object Models [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ds-2-4",
                    "title": "Message-Oriented Communication: Message Queues, Pub-Sub Paradigms [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ds-3",
            "number": 3,
            "title": "Synchronization, Logical Clocks & Mutual Exclusion",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ds-3-1",
                    "title": "Physical Clock Synchronization: Cristian's Algorithm & Berkeley Algorithm [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-3-2",
                    "title": "Logical Clocks: Lamport's Logical Timestamps & Vector Clocks [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ds-3-3",
                    "title": "Global State Detection: Chandy-Lamport Distributed Snapshot Algorithm [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ds-3-4",
                    "title": "Distributed Mutual Exclusion: Centralized, Ricart-Agrawala & Maekawa Algorithms [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ds-4",
            "number": 4,
            "title": "Distributed Consensus, Election & Fault Tolerance",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ds-4-1",
                    "title": "Leader Election Algorithms: Bully Algorithm & Ring Algorithm [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-4-2",
                    "title": "Consensus in Crash-Fault Environments: Paxos & Raft Consensus Protocols [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ds-4-3",
                    "title": "Byzantine Generals Problem & Byzantine Fault Tolerance (BFT) [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ds-4-4",
                    "title": "Distributed Commit Protocols: Two-Phase Commit (2PC) & Three-Phase Commit (3PC) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "ds-5",
            "number": 5,
            "title": "Distributed File Systems & Consistency Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-ds-5-1",
                    "title": "Distributed File Systems: Sun Network File System (NFS) Architecture [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-ds-5-2",
                    "title": "Google File System (GFS) & Hadoop HDFS: Master-Worker, Block Chunking [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-ds-5-3",
                    "title": "Data Replication & Consistency: Strict, Sequential, Causal, Eventual Consistency [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-ds-5-4",
                    "title": "CAP Theorem: Consistency, Availability, Partition Tolerance Trade-offs [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Cyber Security & Cryptography': [
        {
            "id": "csc-1",
            "number": 1,
            "title": "Cyber Threat Landscape & Security Architecture",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csc-1-1",
                    "title": "Cybersecurity Fundamentals: CIA Triad, Defense in Depth & Attack Surfaces [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-1-2",
                    "title": "Threat Modeling: STRIDE, DREAD & Common Vulnerability Scoring System (CVSS) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-1-3",
                    "title": "Social Engineering, Phishing, Ransomware & Advanced Persistent Threats (APTs) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "csc-2",
            "number": 2,
            "title": "Modern Cryptographic Implementations & PKI",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csc-2-1",
                    "title": "Advanced Symmetric Ciphers: AES-128/256 Architecture & Galois/Counter Mode (GCM) [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-2-2",
                    "title": "Asymmetric Cryptosystems: RSA Key Generation, Encryption & Signature Padding (OAEP) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csc-2-3",
                    "title": "Elliptic Curve Cryptography: ECDSA, Ed25519 & Key Exchange via ECDH [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-csc-2-4",
                    "title": "Public Key Infrastructure (PKI): X.509 Certificate Chain, Trust Stores & CRL/OCSP [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "csc-3",
            "number": 3,
            "title": "Network Defense, Firewalls & Intrusion Detection",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csc-3-1",
                    "title": "Next-Generation Firewalls (NGFW), State Inspection & DMZ Segmentation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-3-2",
                    "title": "Intrusion Detection/Prevention Systems (IDS/IPS) with Snort Rule Analysis [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csc-3-3",
                    "title": "Virtual Private Networks: IPsec Tunneling, WireGuard & OpenVPN Protocols [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-csc-3-4",
                    "title": "Distributed Denial of Service (DDoS) Mitigation: SYN Floods, DNS Amplification [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "csc-4",
            "number": 4,
            "title": "Web Application Security & OWASP Top 10",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csc-4-1",
                    "title": "Injection Attacks: SQL Injection (SQLi), Blind SQLi & Prepared Statements [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-4-2",
                    "title": "Cross-Site Scripting (XSS: Stored, Reflected, DOM-based) & CSP Headers [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csc-4-3",
                    "title": "Cross-Site Request Forgery (CSRF), Anti-CSRF Tokens & SameSite Cookies [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csc-4-4",
                    "title": "Server-Side Request Forgery (SSRF) & Insecure Direct Object References (IDOR) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "csc-5",
            "number": 5,
            "title": "Incident Response, SOC Operations & Forensics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csc-5-1",
                    "title": "Security Information & Event Management (SIEM): Log Aggregation & Correlation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csc-5-2",
                    "title": "Incident Response Life Cycle (NIST SP 800-61): Triage, Containment & Eradication [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csc-5-3",
                    "title": "Digital Forensics: Chain of Custody, Memory Dump Analysis (Volatility) & Disk Imaging [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'High Performance Computing': [
        {
            "id": "hpc-1",
            "number": 1,
            "title": "Parallel Computing Architectures & Memory Models",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hpc-1-1",
                    "title": "Flynn's Hardware Classification: SISD, SIMD, MISD, MIMD Architectures [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-1-2",
                    "title": "Shared vs Distributed Memory Systems: UMA, NUMA & Cache Coherence (MESI) [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-1-3",
                    "title": "Interconnection Networks: Crossbar, Hypercube, Torus, Fat-Tree & Bisection Bandwidth [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "hpc-2",
            "number": 2,
            "title": "Shared Memory Programming with OpenMP",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hpc-2-1",
                    "title": "OpenMP Execution Model, Compiler Directives & Parallel Regions [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-2-2",
                    "title": "Work-Sharing Constructs: Parallel For Loops, Sections, Single & Master [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hpc-2-3",
                    "title": "Data Scoping Clauses: shared, private, firstprivate & reduction [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hpc-2-4",
                    "title": "Synchronization Directives: barrier, critical, atomic & OpenMP Locks [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hpc-3",
            "number": 3,
            "title": "Distributed Memory Programming with MPI",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hpc-3-1",
                    "title": "Message Passing Interface (MPI) Model: Communicators, Process Ranks [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-3-2",
                    "title": "Point-to-Point Communication: Blocking (MPI_Send/Recv) vs Non-blocking (Isend/Irecv) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hpc-3-3",
                    "title": "Collective Communications: Broadcast, Scatter, Gather, Allgather, Reduce [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hpc-4",
            "number": 4,
            "title": "GPU Computing & CUDA Programming Architecture",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hpc-4-1",
                    "title": "GPU Microarchitecture: Streaming Multiprocessors (SM), Warps & Thread Hierarchy [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-4-2",
                    "title": "CUDA Execution Model: Grids, Blocks, Threads & Kernel Launch Configurations [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hpc-4-3",
                    "title": "CUDA Memory Hierarchy: Global, Shared, Local, Constant Memory & Coalescing [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hpc-5",
            "number": 5,
            "title": "Parallel Algorithms & Performance Benchmarking",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hpc-5-1",
                    "title": "Amdahl's Law, Gustafson's Law, Speedup, Efficiency & Scalability Analysis [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hpc-5-2",
                    "title": "Parallel Sorting: Bitonic Sort, Sample Sort & Parallel Merge Sort [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hpc-5-3",
                    "title": "HPC Cluster Scheduling: SLURM Job Scripts, Resource Allocation & MPI+CUDA Hybrid [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Blockchain Technology': [
        {
            "id": "bc-1",
            "number": 1,
            "title": "Introduction to Blockchain & Distributed Ledgers",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bc-1-1",
                    "title": "Blockchain History, Centralized vs Decentralized Ledgers & Distributed Architecture [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-1-2",
                    "title": "Cryptographic Hash Functions (SHA-256) & Immutable Ledger Properties [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-1-3",
                    "title": "Public, Private, Consortium and Hybrid Blockchain Models [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "bc-2",
            "number": 2,
            "title": "Blockchain Architecture & Consensus Mechanisms",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bc-2-1",
                    "title": "Block Structure, Merkle Trees, Merkle Roots & Block Header Anatomy [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-2-2",
                    "title": "Proof of Work (PoW): Difficulty Target, Nonce Search & 51% Vulnerability [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bc-2-3",
                    "title": "Proof of Stake (PoS), Delegated PoS (DPoS) & Proof of Authority (PoA) [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bc-2-4",
                    "title": "Byzantine Fault Tolerance (BFT) & Practical Byzantine Fault Tolerance (PBFT) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bc-3",
            "number": 3,
            "title": "Bitcoin Protocol, Transactions & Scripting",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bc-3-1",
                    "title": "Bitcoin Network Architecture, P2P Propagation & Mempool Operations [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-3-2",
                    "title": "UTXO (Unspent Transaction Output) Accounting Model vs Account-Based Model [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bc-3-3",
                    "title": "Wallets, Public-Private Key Derivation (ECDSA) & Hierarchical Deterministic Wallets [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bc-3-4",
                    "title": "Bitcoin Scripting Language: Stack Execution, P2PKH & Multisig Scripts [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bc-4",
            "number": 4,
            "title": "Ethereum, Smart Contracts & Solidity Development",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bc-4-1",
                    "title": "Ethereum Virtual Machine (EVM) Architecture, Gas Model & Execution Opcodes [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-4-2",
                    "title": "Smart Contract Syntax in Solidity: State Variables, Modifiers, Functions & Events [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bc-4-3",
                    "title": "ERC Standards: ERC-20 Fungible Tokens & ERC-721 Non-Fungible Tokens (NFTs) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bc-5",
            "number": 5,
            "title": "Security, Privacy & Enterprise Blockchains",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bc-5-1",
                    "title": "Smart Contract Vulnerabilities: Re-entrancy, Integer Overflow, Front-Running [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bc-5-2",
                    "title": "Privacy Preservation: Zero-Knowledge Proofs (zk-SNARKs, zk-STARKs) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bc-5-3",
                    "title": "Enterprise Blockchains: Hyperledger Fabric Channels, Chaincode & Consensus [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Optimization Techniques': [
        {
            "id": "opt-1",
            "number": 1,
            "title": "Linear Programming Problem (LPP) Formulation & Simplex",
            "category": "theory",
            "topics": [
                {
                    "id": "t-opt-1-1",
                    "title": "LPP Mathematical Formulation: Decision Variables, Objective Function & Constraints [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-1-2",
                    "title": "Graphical Method for Two-Variable Problems & Convex Solution Sets [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-1-3",
                    "title": "Simplex Algorithm: Canonical Form, Slack/Surplus Variables & Tableau Iterations [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-opt-1-4",
                    "title": "Big-M Method & Two-Phase Simplex Method for Infeasible Origins [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "opt-2",
            "number": 2,
            "title": "Duality Theory & Sensitivity Analysis",
            "category": "theory",
            "topics": [
                {
                    "id": "t-opt-2-1",
                    "title": "Formulation of Dual Problem, Primal-Dual Relationships & Complementary Slackness [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-2-2",
                    "title": "Dual Simplex Algorithm & Economic Interpretation of Dual Variables [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-opt-2-3",
                    "title": "Sensitivity Analysis: Changes in Right-Hand Side (b) & Objective Coefficients (c) [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "opt-3",
            "number": 3,
            "title": "Transportation & Assignment Problems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-opt-3-1",
                    "title": "Initial Basic Feasible Solution: North-West Corner, Least Cost, Vogel's Method [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-3-2",
                    "title": "Optimality Test via Modified Distribution (MODI / u-v) Method & Degeneracy [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-opt-3-3",
                    "title": "Assignment Problem: Hungarian Algorithm for Balanced & Unbalanced Matrices [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "opt-4",
            "number": 4,
            "title": "Game Theory & Network Optimization (PERT/CPM)",
            "category": "theory",
            "topics": [
                {
                    "id": "t-opt-4-1",
                    "title": "Two-Person Zero-Sum Games: Saddle Point, Minimax & Maximin Theorems [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-4-2",
                    "title": "Games without Saddle Point: Mixed Strategies & Principle of Dominance [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-opt-4-3",
                    "title": "CPM Network Construction, Earliest/Latest Event Times & Critical Path [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-opt-4-4",
                    "title": "PERT 3-Time Probabilistic Estimates & Project Completion Probability [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "opt-5",
            "number": 5,
            "title": "Non-Linear Optimization & Dynamic Programming",
            "category": "theory",
            "topics": [
                {
                    "id": "t-opt-5-1",
                    "title": "Unconstrained Non-linear Optimization: Gradient Descent & Newton-Raphson [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-opt-5-2",
                    "title": "Constrained Optimization: Lagrange Multipliers & Karush-Kuhn-Tucker (KKT) Conditions [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-opt-5-3",
                    "title": "Bellman's Principle of Optimality & Dynamic Programming Applications [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Bio-informatics': [
        {
            "id": "bio-1",
            "number": 1,
            "title": "Molecular Biology & Biological Data Banks",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bio-1-1",
                    "title": "Central Dogma of Molecular Biology: DNA, RNA, Transcription & Translation [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bio-1-2",
                    "title": "Primary Sequence Databases: GenBank, EMBL, DDBJ, UniProt/Swiss-Prot [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bio-1-3",
                    "title": "Protein 3D Structure Databases: Protein Data Bank (PDB) & CSD [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "bio-2",
            "number": 2,
            "title": "Sequence Alignment & Database Searching",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bio-2-1",
                    "title": "Dot Matrix Pairwise Alignment & Scoring Matrices (PAM 250, BLOSUM 62) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bio-2-2",
                    "title": "Dynamic Programming: Needleman-Wunsch Global & Smith-Waterman Local Alignment [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bio-2-3",
                    "title": "Heuristic Database Search Algorithms: BLAST & FASTA Architecture [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bio-2-4",
                    "title": "Multiple Sequence Alignment (MSA): ClustalW Progressive Alignment [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "bio-3",
            "number": 3,
            "title": "Phylogenetic Analysis & Structural Bioinformatics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-bio-3-1",
                    "title": "Phylogenetic Tree Construction: UPGMA, Neighbor-Joining & Maximum Parsimony [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-bio-3-2",
                    "title": "Hidden Markov Models (HMM) for Gene Prediction & Motif Discovery [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-bio-3-3",
                    "title": "Protein Secondary Structure Prediction (Chou-Fasman, GOR) & Homology Modeling [3L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-bio-3-4",
                    "title": "Molecular Docking & Computer-Aided Drug Design (CADD) Principles [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Robotics': [
        {
            "id": "rob-1",
            "number": 1,
            "title": "Robot Mechanics, Sensors & Transformations",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rob-1-1",
                    "title": "Robot Classifications, Degrees of Freedom (DOF), Work Envelopes & Joints [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-1-2",
                    "title": "Rigid Body Spatial Transformations: Translation, Rotation & Homogeneous Transforms [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-1-3",
                    "title": "Actuators: Stepper Motors, DC Servo Motors, Brushless Drives & Transmissions [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-1-4",
                    "title": "Feedback Sensors: Optical Encoders, Tachometers, Proximity & Vision Sensors [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "rob-2",
            "number": 2,
            "title": "Kinematics Analysis & DH Parameters",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rob-2-1",
                    "title": "Denavit-Hartenberg (D-H) Convention & Frame Assignment Rules [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-2-2",
                    "title": "Forward Kinematics of 2-DOF and 3-DOF Planar & Spherical Serial Manipulators [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-2-3",
                    "title": "Inverse Kinematics: Analytical Geometric Solutions & Algebraic Formulations [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-2-4",
                    "title": "Kinematics of Parallel Robots: Gough-Stewart Platform Architecture [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "rob-3",
            "number": 3,
            "title": "Velocity, Jacobians & Manipulator Dynamics",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rob-3-1",
                    "title": "Manipulator Jacobian Matrix: Differential Motion & Velocity Propagation [3L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-3-2",
                    "title": "Kinematic Singularities: Boundary Singularities & Loss of Degree of Freedom [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-3-3",
                    "title": "Lagrange-Euler Formulation of Manipulator Dynamics & Equations of Motion [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "rob-4",
            "number": 4,
            "title": "Trajectory Planning & Control Architecture",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rob-4-1",
                    "title": "Joint-Space Trajectory Planning: Cubic Polynomials & Quintic Trajectories [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-4-2",
                    "title": "Cartesian-Space Trajectory Planning: Straight-Line & Circular Paths [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-4-3",
                    "title": "Independent Joint PID Control & Computed Torque Control Systems [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "rob-5",
            "number": 5,
            "title": "Mobile Robotics, Navigation & SLAM",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rob-5-1",
                    "title": "Wheeled Mobile Robots (WMR): Differential Drive & Ackermann Steering Kinematics [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rob-5-2",
                    "title": "Dead Reckoning, Odometry Error Accumulation & Sensor Fusion [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rob-5-3",
                    "title": "Simultaneous Localization and Mapping (SLAM) & Obstacle Avoidance Algorithms [3L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Human Resource Development and Organizational Behavior': [
        {
            "id": "hrd-1",
            "number": 1,
            "title": "Human Resource Management & Job Analysis",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hrd-1-1",
                    "title": "HRM Concept, Objectives, Strategic Role & Functions in Modern IT Industry [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hrd-1-2",
                    "title": "Job Analysis, Job Descriptions, Job Specifications & Competency Frameworks [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hrd-1-3",
                    "title": "Human Resource Planning, Recruitment Channels & Talent Selection Methods [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "hrd-2",
            "number": 2,
            "title": "Training, Performance Appraisal & Compensation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hrd-2-1",
                    "title": "Training Needs Assessment, On-the-Job vs Off-the-Job Training Methods [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hrd-2-2",
                    "title": "Performance Appraisal Systems: MBO, BARS & 360-Degree Feedback [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hrd-2-3",
                    "title": "Compensation Management, Incentive Systems & Wage Administration [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hrd-3",
            "number": 3,
            "title": "Foundations of Individual & Organizational Behavior",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hrd-3-1",
                    "title": "Personality Determinants, Big Five Model & Perceptual Biases in Workplace [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hrd-3-2",
                    "title": "Workplace Motivation: Content & Process Theories (Maslow, Herzberg, Vroom) [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hrd-3-3",
                    "title": "Group Dynamics, Team Cohesion & Decision-Making Biases [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "hrd-4",
            "number": 4,
            "title": "Leadership, Organizational Conflict & Change",
            "category": "theory",
            "topics": [
                {
                    "id": "t-hrd-4-1",
                    "title": "Leadership Theories: Situational Leadership, Path-Goal Theory & Transformational Leaders [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-hrd-4-2",
                    "title": "Organizational Conflict: Conflict Process, Negotiation Styles & Dispute Resolution [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-hrd-4-3",
                    "title": "Organizational Change: Lewin's Change Model, Overcoming Resistance & Culture Building [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Research Methodology & IPR': [
        {
            "id": "rm-1",
            "number": 1,
            "title": "Research Formulation & Problem Identification",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rm-1-1",
                    "title": "Research Objectives, Types of Research (Fundamental, Applied, Action) [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rm-1-2",
                    "title": "Formulating Research Problems & Identification of Research Gaps [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rm-1-3",
                    "title": "Systematic Literature Review Techniques & Citation Indexing [1L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "rm-2",
            "number": 2,
            "title": "Research Ethics, Integrity & Scientific Writing",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rm-2-1",
                    "title": "Research Misconduct: Falsification, Fabrication, Plagiarism Detection Tools [1L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rm-2-2",
                    "title": "Conflict of Interest, Predatory Journals & Ethical Publishing Protocols [1L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rm-2-3",
                    "title": "Scientific Paper Writing: IMRAD Format, Referencing Styles (IEEE, APA) & Defense [1L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "rm-3",
            "number": 3,
            "title": "Intellectual Property Rights (IPR) & Patenting",
            "category": "theory",
            "topics": [
                {
                    "id": "t-rm-3-1",
                    "title": "Introduction to IPR: Patents, Copyrights, Trademarks, Industrial Designs & Trade Secrets [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-rm-3-2",
                    "title": "Patentability Criteria: Novelty, Non-Obviousness (Inventive Step) & Industrial Utility [2L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-rm-3-3",
                    "title": "Patent Drafting: Claims Construction, Prior Art Search & Filing Procedure in India/PCT [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-rm-3-4",
                    "title": "IP Commercialization, Technology Licensing & Copyright Law for Software [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Internship/Entrepreneurship': [
        {
            "id": "ie-1",
            "number": 1,
            "title": "Industry Immersion, Scope & Milestone Planning",
            "category": "practical",
            "topics": [
                {
                    "id": "t-ie-1-1",
                    "title": "Industry Organization Onboarding, Problem Statement Definition & Requirements [2P]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-ie-1-2",
                    "title": "Technology Stack Selection, Architectural Blueprints & Sprint Roadmap [2P]",
                    "category": "practical",
                    "status": "completed"
                },
                {
                    "id": "t-ie-1-3",
                    "title": "Development Environment Setup, CI/CD Pipeline & Code Versioning Best Practices [2P]",
                    "category": "practical",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "ie-2",
            "number": 2,
            "title": "Implementation, Benchmarking & Defense",
            "category": "practical",
            "topics": [
                {
                    "id": "t-ie-2-1",
                    "title": "Core Module Development & Unit/Integration Test Verification [3P]",
                    "category": "practical",
                    "status": "in-progress"
                },
                {
                    "id": "t-ie-2-2",
                    "title": "Cloud Staging Deployment, Performance Benchmarking & Security Hardening [3P]",
                    "category": "practical",
                    "status": "not-started"
                },
                {
                    "id": "t-ie-2-3",
                    "title": "Internship Project Dissertation Documentation & Technical Viva Defense [2P]",
                    "category": "practical",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Grand Viva': [
        {
            "id": "gv-1",
            "number": 1,
            "title": "Core Computer Science & Mathematical Foundations",
            "category": "theory",
            "topics": [
                {
                    "id": "t-gv-1-1",
                    "title": "Data Structures, Asymptotic Time/Space Complexity & Graph Algorithms Review",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-gv-1-2",
                    "title": "Discrete Mathematics, Propositional Logic, Automata Theory & Formal Grammars",
                    "category": "theory",
                    "status": "completed"
                }
            ]
        },
        {
            "id": "gv-2",
            "number": 2,
            "title": "System Architecture & Engineering Implementation",
            "category": "theory",
            "topics": [
                {
                    "id": "t-gv-2-1",
                    "title": "Computer Organization, Memory Hierarchy, Pipelining & Cache Mapping Protocols",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-gv-2-2",
                    "title": "Operating Systems: Process Synchronization, CPU Scheduling & Deadlock Resolution",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-gv-2-3",
                    "title": "DBMS: SQL, Relational Normalization (1NF-BCNF) & ACID Transaction Recovery",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-gv-2-4",
                    "title": "Computer Networks: OSI/TCP-IP Protocols, Subnetting, Routing & Transport Flow Control",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        },
        {
            "id": "gv-3",
            "number": 3,
            "title": "Advanced Electives & Scalable Engineering Systems",
            "category": "theory",
            "topics": [
                {
                    "id": "t-gv-3-1",
                    "title": "Software Engineering SDLC Models, Agile Sprints, Design Patterns & UML Modeling",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-gv-3-2",
                    "title": "Machine Learning, Deep Learning, Cloud Computing & Cybersecurity Architectures",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-gv-3-3",
                    "title": "Comprehensive Engineering Viva Voce & Technical Problem-Solving Defense",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

  'Capstone System Design': [
        {
            "id": "csd-1",
            "number": 1,
            "title": "High-Level Architecture & Microservices",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csd-1-1",
                    "title": "System Requirements, Non-Functional Requirements & Capacity Estimations [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csd-1-2",
                    "title": "Monolithic vs Microservice Architecture, Service Decomposition & API Gateways [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csd-1-3",
                    "title": "Load Balancing Algorithms: Round-Robin, Least Connections & Consistent Hashing [2L]",
                    "category": "theory",
                    "status": "in-progress"
                }
            ]
        },
        {
            "id": "csd-2",
            "number": 2,
            "title": "Distributed Caching, Storage & Consistency",
            "category": "theory",
            "topics": [
                {
                    "id": "t-csd-2-1",
                    "title": "Distributed Caching Strategies: Cache-Aside, Write-Through, Write-Behind (Redis/Memcached) [2L]",
                    "category": "theory",
                    "status": "completed"
                },
                {
                    "id": "t-csd-2-2",
                    "title": "Database Scaling: Vertical vs Horizontal Sharding, Master-Slave & Multi-Master Replication [3L]",
                    "category": "theory",
                    "status": "in-progress"
                },
                {
                    "id": "t-csd-2-3",
                    "title": "Asynchronous Message Queues: Kafka, RabbitMQ, Decoupled Worker Queues [2L]",
                    "category": "theory",
                    "status": "not-started"
                },
                {
                    "id": "t-csd-2-4",
                    "title": "Distributed Consistency: Paxos, Raft Consensus, Eventual Consistency & CAP Theorem [2L]",
                    "category": "theory",
                    "status": "not-started"
                }
            ]
        }
    ],

};

// Common abbreviation and alias dictionary
const SUBJECT_ALIASES: Record<string, string> = {
  dsa: 'Data structure and Algorithms',
  datastructures: 'Data structure and Algorithms',
  ca: 'Computer Architecture',
  comparch: 'Computer Architecture',
  os: 'Operating Systems',
  operatingsystem: 'Operating Systems',
  operatingsystems: 'Operating Systems',
  daa: 'Design and Analysis of Algorithms',
  algorithms: 'Design and Analysis of Algorithms',
  ai: 'Introduction to Artificial Intelligence',
  introtoai: 'Introduction to Artificial Intelligence',
  advai: 'Advanced Artificial Intelligence',
  advancedai: 'Advanced Artificial Intelligence',
  iot: 'Internet of Things',
  internetofthings: 'Internet of Things',
  internetofthingsiot: 'Internet of Things',
  dm: 'Discrete Mathematics',
  discretemath: 'Discrete Mathematics',
  discretemathematics: 'Discrete Mathematics',
  dlco: 'Digital Logic and Computer Organization',
  digitallogic: 'Digital Logic and Computer Organization',
  digitallogicandcomputerorganization: 'Digital Logic and Computer Organization',
  deco: 'Digital Logic and Computer Organization',
  math1: 'Engineering Mathematics-I',
  maths1: 'Engineering Mathematics-I',
  mathematics1: 'Engineering Mathematics-I',
  engineeringmathematics1: 'Engineering Mathematics-I',
  math2: 'Engineering Mathematics–II',
  maths2: 'Engineering Mathematics–II',
  mathematics2: 'Engineering Mathematics–II',
  engineeringmathematics2: 'Engineering Mathematics–II',
  chemistry: 'Engineering Chemistry',
  engineeringchemistry: 'Engineering Chemistry',
  physics: 'Engineering Physics',
  engineeringphysics: 'Engineering Physics',
  cprog: 'Introduction to Programming and Problem Solving',
  programminginc: 'Introduction to Programming and Problem Solving',
  cprogramming: 'Introduction to Programming and Problem Solving',
  programmingforproblemsolving: 'Introduction to Programming and Problem Solving',
  programmingforproblemsolvingc: 'Introduction to Programming and Problem Solving',
  envscience: 'Environmental Science',
  environmentalscience: 'Environmental Science',
  iks: 'Indian Knowledge System',
  indianknowledgesystem: 'Indian Knowledge System',
  bee: 'Basic Electrical Engineering',
  basicelectricalengineering: 'Basic Electrical Engineering',
  egd: 'Engineering Graphics & Design',
  engineeringgraphics: 'Engineering Graphics & Design',
  engineeringgraphicsdesign: 'Engineering Graphics & Design',
  constitution: 'Constitution of India & Professional Ethics',
  constitutionofindia: 'Constitution of India & Professional Ethics',
  designthinking: 'Design Thinking & Innovation',
  dbms: 'Database Management Systems',
  databasemanagement: 'Database Management Systems',
  databasemanagementsystems: 'Database Management Systems',
  cn: 'Computer Networks',
  computernetwork: 'Computer Networks',
  computernetworks: 'Computer Networks',
  ml: 'Machine Learning',
  machinelearning: 'Machine Learning',
  flat: 'Formal Language and Automata Theory',
  toc: 'Formal Language and Automata Theory',
  theoryofcomputation: 'Formal Language and Automata Theory',
  formallanguageandautomatatheory: 'Formal Language and Automata Theory',
  automata: 'Formal Language and Automata Theory',
  probstat: 'Probability and Statistics',
  probabilityandstatistics: 'Probability and Statistics',
  pom: 'Principles of Management',
  principlesofmanagement: 'Principles of Management',
  se: 'Software Engineering',
  softwareengineering: 'Software Engineering',
  java: 'Object Oriented Programming using Java',
  oopjava: 'Object Oriented Programming using Java',
  objectorientedprogrammingusingjava: 'Object Oriented Programming using Java',
  oops: 'Object Oriented Programming using Java',
  cd: 'Compiler Design',
  compilerdesign: 'Compiler Design',
  cns: 'Cryptography and Network Security',
  cryptography: 'Cryptography and Network Security',
  cryptographyandnetworksecurity: 'Cryptography and Network Security',
  cg: 'Computer Graphics',
  computergraphics: 'Computer Graphics',
  dhv: 'Data Handling and Visualization',
  datahandlingandvisualization: 'Data Handling and Visualization',
  softcomputing: 'Soft Computing',
  pmf: 'Project Management & Finance',
  projectmanagementandfinance: 'Project Management & Finance',
  projectmanagementfinance: 'Project Management & Finance',
  wit: 'Web and Internet Technology',
  webandinternettechnology: 'Web and Internet Technology',
  webtech: 'Web and Internet Technology',
  webtechnology: 'Web and Internet Technology',
  dl: 'Deep Learning',
  deeplearning: 'Deep Learning',
  ip: 'Image Processing',
  imageprocessing: 'Image Processing',
  dip: 'Image Processing',
  digitalimageprocessing: 'Image Processing',
  cc: 'Cloud Computing',
  cloudcomputing: 'Cloud Computing',
  bda: 'Big Data and Data Analytics',
  bigdata: 'Big Data and Data Analytics',
  bigdataanddataanalytics: 'Big Data and Data Analytics',
  nlp: 'Natural Language Processing',
  naturallanguageprocessing: 'Natural Language Processing',
  mc: 'Mobile Computing',
  mobilecomputing: 'Mobile Computing',
  hci: 'Human Computer Interaction',
  humancomputerinteraction: 'Human Computer Interaction',
  ecommerce: 'E-Commerce and Digital Business Model',
  ecommerceanddigitalbusinessmodel: 'E-Commerce and Digital Business Model',
  quantum: 'Quantum Computing',
  quantumcomputing: 'Quantum Computing',
  cyberlaw: 'Cyber Law and Ethics',
  cyberlawandethics: 'Cyber Law and Ethics',
  distributedsystems: 'Distributed Systems',
  distributedsystem: 'Distributed Systems',
  cybersecurity: 'Cyber Security & Cryptography',
  cybersecuritycryptography: 'Cyber Security & Cryptography',
  hpc: 'High Performance Computing',
  highperformancecomputing: 'High Performance Computing',
  blockchain: 'Blockchain Technology',
  blockchaintechnology: 'Blockchain Technology',
  optimization: 'Optimization Techniques',
  optimizationtechniques: 'Optimization Techniques',
  bioinformatics: 'Bio-informatics',
  robotics: 'Robotics',
  hrd: 'Human Resource Development and Organizational Behavior',
  humanresource: 'Human Resource Development and Organizational Behavior',
  humanresourcedevelopmentandorganizationalbehavior: 'Human Resource Development and Organizational Behavior',
  researchmethodology: 'Research Methodology & IPR',
  researchmethodologyipr: 'Research Methodology & IPR',
  internship: 'Internship/Entrepreneurship',
  internshipentrepreneurship: 'Internship/Entrepreneurship',
  grandviva: 'Grand Viva',
  viva: 'Grand Viva',
  capstone: 'Capstone System Design',
  capstonesystemdesign: 'Capstone System Design',
};

// Fuzzy matcher for subject presets
export function getPresetForSubject(subjectName: string): ChapterItem[] | null {
  if (!subjectName) return null;
  const norm = subjectName.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 1. Direct key match
  for (const [key, preset] of Object.entries(SUBJECT_PRESETS)) {
    const keyNorm = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (norm === keyNorm) {
      return preset;
    }
  }

  // 2. Alias lookup
  const canonicalName = SUBJECT_ALIASES[norm];
  if (canonicalName && SUBJECT_PRESETS[canonicalName]) {
    return SUBJECT_PRESETS[canonicalName];
  }

  // 3. Substring matching
  for (const [key, preset] of Object.entries(SUBJECT_PRESETS)) {
    const keyNorm = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (keyNorm.length >= 4 && (norm.includes(keyNorm) || keyNorm.includes(norm))) {
      return preset;
    }
  }

  // 4. Word-token matching
  const words = norm.match(/[a-z]{4,}/g) || [];
  for (const [key, preset] of Object.entries(SUBJECT_PRESETS)) {
    const keyNorm = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    const matchedCount = words.filter((w) => keyNorm.includes(w)).length;
    if (matchedCount >= 2 || (words.length === 1 && matchedCount === 1 && keyNorm.length < 15)) {
      return preset;
    }
  }

  return null;
}
