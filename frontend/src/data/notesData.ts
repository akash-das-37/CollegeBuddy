export interface NoteItem {
  id: string;
  title: string;
  description: string;
  pages: number;
  format: 'PDF' | 'DOC' | 'MD';
  color: 'red' | 'blue' | 'purple' | 'green' | 'amber';
  status: 'completed' | 'in_progress' | 'not_started';
  contentMarkdown: string;
}

export interface TopicMindMapNode {
  title: string;
  children?: string[];
}

export interface TopicData {
  id: string;
  number: number;
  shortTitle: string;
  fullTitle: string;
  description: string;
  notesCount: number;
  notes: NoteItem[];
  summary: string[];
  keyPoints: { title: string; detail: string; badge?: string }[];
  mindMap: TopicMindMapNode[];
  practiceQs: {
    question: string;
    marks: number;
    year: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    answerSnippet: string;
  }[];
  videos: {
    title: string;
    educator: string;
    duration: string;
    url: string;
  }[];
}

export interface SubjectNotesCatalog {
  subjectName: string;
  semester: number;
  topics: TopicData[];
}

export const DSA_TOPICS: TopicData[] = [
  {
    id: 'dsa-1',
    number: 1,
    shortTitle: 'Introduction to DSA',
    fullTitle: 'Introduction to Data Structures and Algorithms',
    description: 'Learn the basics, types, complexity analysis and importance of DSA.',
    notesCount: 4,
    notes: [
      {
        id: 'n-1-1',
        title: '1. Introduction and Overview',
        description: 'What is Data Structure? What is Algorithm? Real world examples, importance and applications.',
        pages: 12,
        format: 'PDF',
        color: 'red',
        status: 'completed',
        contentMarkdown: `### 1. Introduction and Overview of DSA

#### 1.1 What is a Data Structure?
A **data structure** is a specialized format for organizing, processing, retrieving, and storing data in computer memory efficiently. 

- **Linear Data Structures**: Elements are arranged sequentially (Arrays, Linked Lists, Stacks, Queues).
- **Non-Linear Data Structures**: Elements form hierarchical or interconnected relationships (Trees, Graphs).

\`\`\`
Data Structures
├── Primitive (int, float, char, pointer)
└── Non-Primitive
    ├── Linear (Array, Linked List, Stack, Queue)
    └── Non-Linear (Tree, Graph, Hash Table)
\`\`\`

#### 1.2 What is an Algorithm?
An **algorithm** is a well-defined sequence of unambiguous, computational instructions that transforms an input into an intended output.

##### Core Properties:
1. **Finiteness**: Terminates after a finite number of steps.
2. **Definiteness**: Every step is precise and unambiguous.
3. **Input & Output**: Takes 0 or more inputs, produces at least 1 output.
4. **Effectiveness**: Operations are basic enough to be executed in principle.

#### 1.3 Real-World Applications:
- **Navigation (Google Maps)**: Dijkstra's & A* algorithm on weighted directed graphs.
- **Search Engines (Google)**: PageRank, Inverted Index using Hash Tables and Tries.
- **Operating Systems**: Priority Queues for CPU scheduling, Stacks for function call frames.`,
      },
      {
        id: 'n-1-2',
        title: '2. Types of Data Structures',
        description: 'Linear vs Non-Linear, Static vs Dynamic, Examples and use cases.',
        pages: 10,
        format: 'PDF',
        color: 'blue',
        status: 'in_progress',
        contentMarkdown: `### 2. Classification of Data Structures

#### 2.1 Static vs Dynamic Data Structures
- **Static**: Memory size is allocated at compile time and fixed during runtime (e.g. traditional Array \`int arr[100]\`). Fast access via contiguous index arithmetic, but memory wastage or overflow risks exist.
- **Dynamic**: Memory size grows or shrinks at runtime dynamically from the heap (e.g. Linked Lists, Dynamic Vectors). Flexible sizing with $O(1)$ amortized expansion.

#### 2.2 Comparison Table

| Data Structure | Organization | Memory Allocation | Access Time | Insertion/Deletion |
| :--- | :--- | :--- | :--- | :--- |
| **Array** | Contiguous Linear | Static/Dynamic | $O(1)$ via index | $O(N)$ (requires shifting) |
| **Linked List** | Pointer Linked | Dynamic Heap | $O(N)$ traversal | $O(1)$ if pointer given |
| **Stack (LIFO)** | Linear Container | Static or Dynamic | $O(1)$ at Top | $O(1)$ Push / Pop |
| **Queue (FIFO)** | Linear Container | Static or Dynamic | $O(1)$ at Front | $O(1)$ Enqueue / Dequeue |
| **Binary Tree** | Hierarchical Non-Linear | Dynamic Pointer | $O(\\log N)$ balanced | $O(\\log N)$ insertion |
| **Graph** | Vertices & Edges | Adjacency Matrix/List | $O(V + E)$ traversal | $O(1)$ to $O(V)$ |`,
      },
      {
        id: 'n-1-3',
        title: '3. Algorithm Analysis',
        description: 'Time Complexity, Space Complexity, Big-O Notation, Best/Average/Worst Case Analysis.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### 3. Algorithm Analysis & Asymptotic Notations

#### 3.1 Asymptotic Notations
Asymptotic analysis evaluates how the runtime and auxiliary memory requirements of an algorithm scale as the input size $N \\to \\infty$.

1. **Big-O ($O$) — Upper Bound**:
   $$f(N) = O(g(N)) \\iff \\exists c > 0, N_0 > 0 \\text{ such that } f(N) \\le c \\cdot g(N) \\quad \\forall N \\ge N_0$$
   Represents the **worst-case performance ceiling**.

2. **Big-Omega ($\\Omega$) — Lower Bound**:
   $$f(N) = \\Omega(g(N)) \\iff \\exists c > 0, N_0 > 0 \\text{ such that } f(N) \\ge c \\cdot g(N) \\quad \\forall N \\ge N_0$$
   Represents the **best-case performance floor**.

3. **Big-Theta ($\\Theta$) — Tight Bound**:
   $$f(N) = \\Theta(g(N)) \\iff c_1 g(N) \\le f(N) \\le c_2 g(N) \\quad \\forall N \\ge N_0$$

#### 3.2 Common Time Complexity Hierarchy:
$$O(1) < O(\\log N) < O(\\sqrt{N}) < O(N) < O(N \\log N) < O(N^2) < O(2^N) < O(N!)$$

#### 3.3 Space Complexity:
Space Complexity = **Auxiliary Space** (temporary variables, recursion stack frames) + **Input Space**.`,
      },
      {
        id: 'n-1-4',
        title: '4. Basic Problem Solving Approach',
        description: 'Steps to solve a problem, Pseudocode, Flowcharts, and common patterns.',
        pages: 8,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### 4. Basic Problem Solving Framework

#### 4.1 The 5-Step Engineering Approach
1. **Understand & Clarify**: Identify input bounds ($N \\le 10^5$), data types (overflow into 64-bit integers), and edge cases ($N = 0$, negative inputs, duplicates).
2. **Work Concrete Examples**: Trace small manual test cases by hand before writing any code.
3. **Draft High-Level Pseudocode**: Formulate the invariant, step breakdown, and loop termination conditions.
4. **Implement Clean Code**: Write modular, idiomatic code with variable names matching mathematical definitions.
5. **Analyze & Optimize**: Check if nested $O(N^2)$ loops can be reduced to $O(N \\log N)$ with sorting or $O(N)$ with hash tables / two-pointers.

#### 4.2 Standard Algorithm Paradigms:
- **Brute Force**: Exhaustive search over state space.
- **Divide and Conquer**: Divide into subproblems, conquer recursively, combine results (Merge Sort, Binary Search).
- **Greedy Approach**: Locally optimal choice at each stage (Dijkstra, Kruskal, Fractional Knapsack).
- **Dynamic Programming**: Memoize overlapping subproblems with optimal substructure.`,
      },
    ],
    summary: [
      'Data structures organize data for optimal access and modification speed.',
      'Algorithms are step-by-step computational procedures with guaranteed termination.',
      'Big-O notation specifies the asymptotic upper bound of time/space complexity.',
      'Always determine time complexity based on loop nestings and recursion trees.',
      'Choose linear structures for sequential data and tree/graph structures for hierarchical relationships.',
    ],
    keyPoints: [
      { title: 'Big-O Growth Rate', detail: 'O(1) < O(log N) < O(N) < O(N log N) < O(N²) < O(2ⁿ)', badge: 'Must Remember' },
      { title: 'Contiguous vs Linked Memory', detail: 'Arrays provide O(1) random index access; Linked Lists allow O(1) pointer updates without reallocation.', badge: 'Core Concept' },
      { title: 'Auxiliary Space vs Total Space', detail: 'Auxiliary space accounts only for temporary variables and call stack, excluding input parameters.', badge: 'Exam Favorite' },
      { title: 'Amortized Analysis', detail: 'Dynamic array doubling takes O(1) average time per append across N operations.', badge: 'Advanced' },
    ],
    mindMap: [
      {
        title: 'Data Structures',
        children: ['Primitive (int, float, char)', 'Linear (Array, Linked List, Stack, Queue)', 'Non-Linear (Trees, Graphs, Heaps)'],
      },
      {
        title: 'Asymptotic Analysis',
        children: ['Big-O (Upper Bound)', 'Omega (Lower Bound)', 'Theta (Tight Bound)', 'Master Theorem for Recurrences'],
      },
      {
        title: 'Algorithm Paradigms',
        children: ['Brute Force', 'Divide & Conquer', 'Greedy Method', 'Dynamic Programming', 'Backtracking'],
      },
    ],
    practiceQs: [
      {
        question: 'Define Data Structure. Differentiate between Linear and Non-Linear Data Structures with 2 examples each.',
        marks: 5,
        year: '2024',
        difficulty: 'Easy',
        answerSnippet: 'Linear data structures store elements sequentially where each element has unique predecessor/successor (Arrays, Stacks). Non-linear structures organize data hierarchically (Trees, Graphs).',
      },
      {
        question: 'Explain Big-O, Big-Omega, and Big-Theta notations with their formal mathematical definitions and graphical representations.',
        marks: 10,
        year: '2023',
        difficulty: 'Medium',
        answerSnippet: 'State f(n) <= c*g(n) for n >= n0 for Big-O. Draw curves showing c*g(n) bounding f(n) from above.',
      },
      {
        question: 'Solve recurrence relation T(n) = 2T(n/2) + O(n) using Master Theorem. State its time complexity.',
        marks: 7,
        year: '2022',
        difficulty: 'Hard',
        answerSnippet: 'Here a=2, b=2, k=1, p=0. Since log_b(a) = log_2(2) = 1 = k, by Case 2 of Master Theorem, T(n) = O(n log n).',
      },
    ],
    videos: [
      {
        title: 'Introduction to Data Structures & Algorithms',
        educator: 'Abdul Bari',
        duration: '22:15',
        url: 'https://www.youtube.com/results?search_query=abdul+bari+introduction+to+data+structures',
      },
      {
        title: 'Time & Space Complexity Complete Guide',
        educator: 'Gate Smashers',
        duration: '18:40',
        url: 'https://www.youtube.com/results?search_query=gate+smashers+time+complexity+analysis',
      },
      {
        title: 'Big-O Notation Visualized in 15 Minutes',
        educator: 'Neso Academy',
        duration: '15:10',
        url: 'https://www.youtube.com/results?search_query=neso+academy+asymptotic+notation',
      },
    ],
  },
  {
    id: 'dsa-2',
    number: 2,
    shortTitle: 'Arrays',
    fullTitle: 'Arrays: Memory Layout, Matrix Operations and Dynamic Arrays',
    description: '1D/2D arrays, row-major vs column-major addressing, sliding window and prefix sums.',
    notesCount: 6,
    notes: [
      {
        id: 'n-2-1',
        title: '1. Array Memory Addressing Formulae',
        description: 'Row-major and column-major address calculation derivations for 2D and 3D arrays.',
        pages: 11,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Array Memory Representation & Address Calculation

#### 1. One-Dimensional Array
$$\\text{Address}(A[i]) = B + W \\times (i - LB)$$
Where:
- $B$ = Base address
- $W$ = Element size in bytes
- $LB$ = Lower bound of index

#### 2. Two-Dimensional Array — Row-Major Order (C/C++, Python)
$$\\text{Address}(A[i][j]) = B + W \\times [(i - LB_r) \\times C + (j - LB_c)]$$
Where $C$ is total number of columns.

#### 3. Two-Dimensional Array — Column-Major Order (Fortran, MATLAB)
$$\\text{Address}(A[i][j]) = B + W \\times [(j - LB_c) \\times R + (i - LB_r)]$$
Where $R$ is total number of rows.`,
      },
      {
        id: 'n-2-2',
        title: '2. Prefix Sums & Difference Arrays',
        description: 'Subarray range query optimization from O(N) to O(1).',
        pages: 9,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Prefix Sum Array Technique

Given array $A$ of size $N$, construct prefix array $P$ where:
$$P[i] = P[i-1] + A[i]$$

Any range sum query $\\sum_{k=L}^{R} A[k]$ computes in $O(1)$:
$$\\text{Sum}(L, R) = P[R] - P[L-1]$$`,
      },
      {
        id: 'n-2-3',
        title: '3. Sliding Window & Two Pointers',
        description: 'Constant memory subarray optimization patterns.',
        pages: 13,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Sliding Window & Two-Pointer Strategies
Ideal for finding longest/shortest continuous subarrays satisfying a condition. Reduces $O(N^2)$ brute-force down to $O(N)$ linear time.`,
      },
    ],
    summary: [
      'Arrays are contiguous blocks of homogeneous memory with O(1) index access.',
      'Row-major order stores elements row-by-row; column-major stores column-by-column.',
      'Prefix sums reduce static range sum queries from O(N) to O(1).',
      'Sliding window solves subarray optimization in O(N) time with O(1) space.',
    ],
    keyPoints: [
      { title: 'Row-Major Formula', detail: 'Addr(A[i][j]) = Base + W * ((i - LB_r) * C + (j - LB_c))', badge: 'Exam Formula' },
      { title: 'Random Access Complexity', detail: 'O(1) because pointer arithmetic uses base address and index multiplication directly.', badge: 'Property' },
    ],
    mindMap: [
      { title: 'Array Architectures', children: ['Static Fixed Arrays', 'Dynamic Arrays (Vectors)', 'Sparse Matrix Representation'] },
      { title: 'Algorithmic Patterns', children: ['Prefix Sums', 'Two Pointers', 'Sliding Window', 'Kadane Algorithm (Max Subarray)'] },
    ],
    practiceQs: [
      {
        question: 'An array A[-2..4, 3..8] is stored in row-major order with base address 1000 and element size 4 bytes. Find address of A[2][5].',
        marks: 8,
        year: '2024',
        difficulty: 'Medium',
        answerSnippet: 'Rows R=7, Cols C=6. Row index offset = 2 - (-2) = 4. Col index offset = 5 - 3 = 2. Address = 1000 + 4 * (4 * 6 + 2) = 1000 + 4 * 26 = 1104.',
      },
    ],
    videos: [
      { title: 'Row Major & Column Major Addressing', educator: 'Gate Smashers', duration: '14:20', url: 'https://www.youtube.com/results?search_query=gate+smashers+row+major+column+major' },
    ],
  },
  {
    id: 'dsa-3',
    number: 3,
    shortTitle: 'Linked Lists',
    fullTitle: 'Linked Lists: Singly, Doubly, Circular and Skip Lists',
    description: 'Pointer management, insertion, deletion, cycle detection and memory representation.',
    notesCount: 5,
    notes: [
      {
        id: 'n-3-1',
        title: '1. Singly Linked List Fundamentals',
        description: 'Node structure, pointer mechanics, head/tail pointers, insertion and deletion.',
        pages: 14,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Singly Linked List Implementation

\`\`\`c
struct Node {
    int data;
    struct Node* next;
};
\`\`\`

#### Operations Complexity:
- **Insert at Head**: $O(1)$
- **Insert at Tail** (with tail pointer): $O(1)$
- **Delete at Head**: $O(1)$
- **Search Element**: $O(N)$
- **Delete Node at Middle**: $O(N)$ to locate + $O(1)$ pointer rewiring.`,
      },
      {
        id: 'n-3-2',
        title: '2. Floyd Cycle Detection Algorithm',
        description: 'Fast and slow pointer (Hare & Tortoise) loop detection proof and start node derivation.',
        pages: 9,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Floyd Cycle Detection (Tortoise and Hare)
1. Initialize slow = head, fast = head.
2. Advance slow by 1 step, fast by 2 steps.
3. If slow == fast, a cycle exists.
4. To find cycle entrance: Reset slow = head, keep fast at collision point, advance both by 1 step until they meet.`,
      },
    ],
    summary: [
      'Linked lists store non-contiguous dynamic nodes connected via pointers.',
      'Singly linked lists have unidirectional next pointers; doubly have prev and next.',
      'Circular linked lists loop back to head, useful in round-robin scheduling.',
      'Floyd cycle algorithm detects loops in O(N) time with O(1) auxiliary space.',
    ],
    keyPoints: [
      { title: 'Pointer Overhead', detail: 'Extra 4/8 bytes pointer stored per node compared to dense arrays.', badge: 'Trade-off' },
      { title: 'Cycle Detection', detail: 'Slow moves 1 step, fast moves 2 steps. Meets inside loop in O(N).', badge: 'Key Algorithm' },
    ],
    mindMap: [
      { title: 'Linked List Types', children: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Skip Lists'] },
    ],
    practiceQs: [
      {
        question: 'Write a C function to reverse a singly linked list iteratively and recursively.',
        marks: 8,
        year: '2023',
        difficulty: 'Medium',
        answerSnippet: 'Iterative approach uses prev, curr, next pointers rewired in a while(curr != NULL) loop in O(N) time and O(1) space.',
      },
    ],
    videos: [
      { title: 'Linked List Full Tutorial', educator: 'Abdul Bari', duration: '45:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+linked+list' },
    ],
  },
  {
    id: 'dsa-4',
    number: 4,
    shortTitle: 'Stacks and Queues',
    fullTitle: 'Stacks and Queues: LIFO/FIFO, Infix-to-Postfix, and Deque',
    description: 'Stack evaluation, parenthesization, queue implementations, circular queue buffers.',
    notesCount: 6,
    notes: [
      {
        id: 'n-4-1',
        title: '1. Stack Operations & Polish Notation',
        description: 'Infix, prefix, and postfix conversions using operator precedence stack.',
        pages: 15,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Stack Applications: Infix to Postfix Conversion

#### Shunting-Yard Algorithm Rules:
1. Operands append directly to output.
2. '(' pushes onto operator stack.
3. ')' pops operators to output until '(' is reached.
4. Operators pop higher or equal precedence operators before pushing onto stack.`,
      },
      {
        id: 'n-4-2',
        title: '2. Circular Queue Array Mechanics',
        description: 'Modulo arithmetic for front and rear pointers avoiding memory drift.',
        pages: 10,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Circular Queue Formulae
- **Enqueue**: \`rear = (rear + 1) % MAX_SIZE\`
- **Dequeue**: \`front = (front + 1) % MAX_SIZE\`
- **Full Condition**: \`(rear + 1) % MAX_SIZE == front\`
- **Empty Condition**: \`front == -1\` or \`front == rear\``,
      },
    ],
    summary: [
      'Stack operates on Last-In-First-Out (LIFO); Queue on First-In-First-Out (FIFO).',
      'Stacks manage recursion call stacks, undo mechanisms, and expression parsing.',
      'Circular queues utilize modulo arithmetic to recycle vacated slots.',
    ],
    keyPoints: [
      { title: 'Expression Evaluation', detail: 'Postfix expressions require zero parentheses and evaluate linearly with 1 stack.', badge: 'Exam Must' },
    ],
    mindMap: [
      { title: 'Stack & Queue', children: ['LIFO Stacks', 'FIFO Queues', 'Circular Queues', 'Double Ended Queue (Deque)'] },
    ],
    practiceQs: [
      {
        question: 'Convert (A + B) * C - (D - E) ^ F to postfix notation using a stack trace table.',
        marks: 10,
        year: '2024',
        difficulty: 'Medium',
        answerSnippet: 'Output: A B + C * D E - F ^ - with step-by-step stack contents shown in tabular trace.',
      },
    ],
    videos: [
      { title: 'Infix to Postfix using Stack', educator: 'Neso Academy', duration: '20:15', url: 'https://www.youtube.com/results?search_query=neso+academy+infix+to+postfix' },
    ],
  },
  {
    id: 'dsa-5',
    number: 5,
    shortTitle: 'Trees',
    fullTitle: 'Tree Data Structures: Hierarchical Terminology & Traversal',
    description: 'Tree definitions, degree, depth, height, level-order traversal, representation.',
    notesCount: 7,
    notes: [
      {
        id: 'n-5-1',
        title: '1. Tree Terminology & Mathematical Properties',
        description: 'Root, leaf, internal nodes, height vs depth, n nodes = n-1 edges theorem.',
        pages: 12,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Tree Fundamentals
- **Node**: Data element with links to child nodes.
- **Edge**: Directed link between parent and child.
- **Height**: Length of longest path from node to a leaf.
- **Depth**: Length of path from root to node.
- **Theorem**: Any tree with $N$ vertices has exactly $N - 1$ edges.`,
      },
    ],
    summary: ['Trees represent hierarchical data where every node has at most one parent except the root.'],
    keyPoints: [{ title: 'Tree Theorem', detail: 'A tree with N nodes contains exactly N-1 edges.', badge: 'Proof' }],
    mindMap: [{ title: 'Tree Concepts', children: ['General Trees', 'Binary Trees', 'Multiway Trees'] }],
    practiceQs: [{ question: 'Prove that a tree with N nodes has exactly N-1 edges.', marks: 5, year: '2023', difficulty: 'Easy', answerSnippet: 'By induction on number of vertices N.' }],
    videos: [{ title: 'Tree Data Structure Overview', educator: 'Abdul Bari', duration: '25:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+trees' }],
  },
  {
    id: 'dsa-6',
    number: 6,
    shortTitle: 'Binary Trees',
    fullTitle: 'Binary Trees: Properties, Inorder, Preorder, and Postorder',
    description: 'Full, complete, and perfect binary trees, tree reconstruction from traversals.',
    notesCount: 5,
    notes: [
      {
        id: 'n-6-1',
        title: '1. Binary Tree Traversals (Recursive & Iterative)',
        description: 'Inorder (LNR), Preorder (NLR), Postorder (LRN), and Level-order (BFS).',
        pages: 14,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Binary Tree Traversals
- **Preorder**: Node $\\to$ Left $\\to$ Right
- **Inorder**: Left $\\to$ Node $\\to$ Right (Yields sorted order in BST)
- **Postorder**: Left $\\to$ Right $\\to$ Node`,
      },
    ],
    summary: ['Binary trees limit children per node to at most 2 (left and right).'],
    keyPoints: [{ title: 'Reconstruction Rule', detail: 'Inorder + either Preorder or Postorder is strictly required to uniquely construct a binary tree.', badge: 'Exam Rule' }],
    mindMap: [{ title: 'Traversals', children: ['Preorder (DLR)', 'Inorder (LDR)', 'Postorder (LRD)', 'Level Order (BFS)'] }],
    practiceQs: [{ question: 'Construct unique binary tree from Inorder: D B E A F C and Preorder: A B D E C F.', marks: 10, year: '2024', difficulty: 'Medium', answerSnippet: 'Root is A. Left subtree in Inorder is DBE, right is FC. Continue recursively.' }],
    videos: [{ title: 'Binary Tree Traversals', educator: 'Gate Smashers', duration: '18:10', url: 'https://www.youtube.com/results?search_query=gate+smashers+binary+tree+traversals' }],
  },
  {
    id: 'dsa-7',
    number: 7,
    shortTitle: 'Binary Search Trees',
    fullTitle: 'Binary Search Trees: Search, Insertion, Deletion and Validation',
    description: 'BST property, successor and predecessor logic, balance factor degradation.',
    notesCount: 4,
    notes: [
      {
        id: 'n-7-1',
        title: '1. BST Deletion Mechanics',
        description: 'Case 1 (Leaf), Case 2 (Single Child), Case 3 (Two Children using Inorder Successor).',
        pages: 11,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### BST Deletion Algorithm
- **Leaf Node**: Simply set parent pointer to NULL and free node.
- **One Child**: Bypass node by connecting parent directly to child.
- **Two Children**: Replace node value with Inorder Successor (minimum node in right subtree), then delete successor recursively.`,
      },
    ],
    summary: ['BST enforces Left < Root < Right at every node, enabling O(log N) search when balanced.'],
    keyPoints: [{ title: 'Worst Case BST', detail: 'Skewed BST degenerates into linked list with O(N) operations.', badge: 'Pitfall' }],
    mindMap: [{ title: 'BST Operations', children: ['Search O(h)', 'Insert O(h)', 'Delete O(h)', 'Inorder Successor'] }],
    practiceQs: [{ question: 'Explain deletion in BST with all 3 cases and illustrations.', marks: 10, year: '2023', difficulty: 'Medium', answerSnippet: 'Case 1: Leaf node. Case 2: One child. Case 3: Two children with successor replacement.' }],
    videos: [{ title: 'BST Deletion Explained', educator: 'Abdul Bari', duration: '28:10', url: 'https://www.youtube.com/results?search_query=abdul+bari+bst+deletion' }],
  },
  {
    id: 'dsa-8',
    number: 8,
    shortTitle: 'Heaps and Priority Queue',
    fullTitle: 'Heaps: Min-Heap, Max-Heap, Heapify and Heap Sort',
    description: 'Complete binary tree array storage, sift-up, sift-down, O(N) build-heap derivation.',
    notesCount: 5,
    notes: [
      {
        id: 'n-8-1',
        title: '1. Heapify & O(N) Build-Heap Derivation',
        description: 'Why building a heap takes linear time O(N) instead of O(N log N).',
        pages: 12,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Binary Heap Array Storage
For 0-indexed array:
- Left child = $2i + 1$
- Right child = $2i + 2$
- Parent = $\\lfloor (i - 1) / 2 \\rfloor$

#### O(N) Build-Heap Proof:
Sum over heights: $\\sum_{h=0}^{\\log N} \\frac{N}{2^{h+1}} \\times O(h) = O(N)$.`,
      },
    ],
    summary: ['Heap is a complete binary tree satisfying the heap property (parent >= children for max-heap).'],
    keyPoints: [{ title: 'Build Heap Complexity', detail: 'Bottom-up build heap executes in O(N) linear time.', badge: 'Math Proof' }],
    mindMap: [{ title: 'Heaps', children: ['Max Heap', 'Min Heap', 'Heap Sort O(N log N)', 'Priority Queue'] }],
    practiceQs: [{ question: 'Show step-by-step construction of Max-Heap from [12, 11, 13, 5, 6, 7] using bottom-up heapify.', marks: 8, year: '2024', difficulty: 'Medium', answerSnippet: 'Start heapify from last non-leaf node index n/2 - 1.' }],
    videos: [{ title: 'Heap Sort & Heapify', educator: 'Abdul Bari', duration: '32:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+heap+sort' }],
  },
  {
    id: 'dsa-9',
    number: 9,
    shortTitle: 'Graphs',
    fullTitle: 'Graphs: Adjacency Matrix vs List, BFS, DFS and Bipartite Check',
    description: 'Graph representations, breadth-first search, depth-first search, cycle detection in directed graphs.',
    notesCount: 7,
    notes: [
      {
        id: 'n-9-1',
        title: '1. Graph Representations & Traversal Complexity',
        description: 'Adjacency matrix vs Adjacency list space and time trade-offs, BFS vs DFS.',
        pages: 16,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Graph Representations
- **Adjacency Matrix**: $V \\times V$ 2D array. Space: $O(V^2)$. Edge lookup: $O(1)$.
- **Adjacency List**: Array of lists. Space: $O(V + E)$. Edge lookup: $O(\\text{degree})$.

#### BFS vs DFS Complexity:
Both visit every vertex and edge:
$$\\text{Time} = O(V + E) \\quad \\text{using adjacency list}$$`,
      },
    ],
    summary: ['Graphs represent arbitrary pairwise networks of vertices and edges.'],
    keyPoints: [{ title: 'BFS vs DFS Queue/Stack', detail: 'BFS uses a FIFO queue (finds shortest unweighted path); DFS uses a LIFO call stack.', badge: 'Core Traversal' }],
    mindMap: [{ title: 'Graphs', children: ['Adjacency Matrix/List', 'BFS O(V+E)', 'DFS O(V+E)', 'Cycle Detection'] }],
    practiceQs: [{ question: 'Compare Adjacency Matrix and Adjacency List representations of a graph with diagrams.', marks: 6, year: '2023', difficulty: 'Easy', answerSnippet: 'Matrix is best for dense graphs; List is optimal for sparse graphs.' }],
    videos: [{ title: 'Graph Traversal BFS and DFS', educator: 'Gate Smashers', duration: '24:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+bfs+dfs' }],
  },
  {
    id: 'dsa-10',
    number: 10,
    shortTitle: 'Dynamic Programming',
    fullTitle: 'Dynamic Programming: Memoization, Tabulation and Subproblems',
    description: 'Optimal substructure, overlapping subproblems, 0/1 knapsack, LCS, and matrix chain.',
    notesCount: 8,
    notes: [
      {
        id: 'n-1-10',
        title: '1. 0/1 Knapsack Problem Derivation',
        description: 'Recurrence relation and 2D DP table formulation.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### 0/1 Knapsack Recurrence
$$DP[i][w] = \\max(DP[i-1][w], DP[i-1][w - wt[i-1]] + val[i-1]) \\quad \\text{if } wt[i-1] \\le w$$
Else $DP[i][w] = DP[i-1][w]$.

Time Complexity: $O(N \\times W)$, Space Complexity: $O(N \\times W)$ reducible to $O(W)$.`,
      },
    ],
    summary: ['DP solves optimization problems with overlapping subproblems and optimal substructure.'],
    keyPoints: [{ title: 'Top-Down vs Bottom-Up', detail: 'Top-Down uses recursion + memoization table; Bottom-Up uses iterative tabulation.', badge: 'Paradigm' }],
    mindMap: [{ title: 'Dynamic Programming', children: ['Memoization (Top-down)', 'Tabulation (Bottom-up)', '0/1 Knapsack', 'Longest Common Subsequence'] }],
    practiceQs: [{ question: 'Solve 0/1 Knapsack for weights [2, 3, 4], values [3, 4, 5], capacity W=5 using DP table.', marks: 10, year: '2024', difficulty: 'Hard', answerSnippet: 'Optimal value = 7 by choosing items 1 and 2.' }],
    videos: [{ title: '0/1 Knapsack Dynamic Programming', educator: 'Abdul Bari', duration: '35:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+knapsack+problem' }],
  },
  {
    id: 'dsa-11',
    number: 11,
    shortTitle: 'Hashing',
    fullTitle: 'Hashing: Hash Functions, Collision Resolution, Open Addressing',
    description: 'Chaining, linear probing, quadratic probing, double hashing, load factor analysis.',
    notesCount: 4,
    notes: [
      {
        id: 'n-11-1',
        title: '1. Collision Resolution Techniques',
        description: 'Separate chaining vs Open addressing (Linear Probing, Quadratic Probing, Double Hashing).',
        pages: 12,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Collision Resolution Strategies
- **Separate Chaining**: Bucket contains linked list. Load factor $\\alpha$ can exceed 1.
- **Linear Probing**: $h(k, i) = (h'(k) + i) \\pmod M$. Suffers from primary clustering.
- **Double Hashing**: $h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\pmod M$. Avoids clustering.`,
      },
    ],
    summary: ['Hashing achieves average O(1) insertion, deletion, and lookup.'],
    keyPoints: [{ title: 'Load Factor', detail: 'Load factor alpha = N / M. Keep alpha < 0.7 to maintain O(1) performance.', badge: 'Formula' }],
    mindMap: [{ title: 'Hashing', children: ['Direct Addressing', 'Chaining', 'Open Addressing', 'Cryptographic Hash Functions'] }],
    practiceQs: [{ question: 'Insert keys [12, 23, 34, 45, 56] into hash table of size 7 using Linear Probing with h(k) = k mod 7.', marks: 8, year: '2023', difficulty: 'Medium', answerSnippet: 'Trace probe collisions at each index.' }],
    videos: [{ title: 'Hashing & Collision Resolution', educator: 'Gate Smashers', duration: '22:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+hashing' }],
  },
  {
    id: 'dsa-12',
    number: 12,
    shortTitle: 'Searching & Sorting',
    fullTitle: 'Searching & Sorting: Merge Sort, Quick Sort, Radix Sort and Stability',
    description: 'Comparison vs non-comparison sorts, pivot selection, stability analysis, binary search.',
    notesCount: 6,
    notes: [
      {
        id: 'n-12-1',
        title: '1. Sorting Algorithms Comparative Analysis',
        description: 'Best, worst, average time complexity, space complexity, stability and adaptivity.',
        pages: 16,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Comparative Sorting Summary

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Bubble Sort** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes |
| **Insertion Sort** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes |
| **Merge Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N \\log N)$ | $O(N)$ | Yes |
| **Quick Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N^2)$ | $O(\\log N)$ | No |
| **Heap Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N \\log N)$ | $O(1)$ | No |
| **Counting Sort** | $O(N + K)$ | $O(N + K)$ | $O(N + K)$ | $O(K)$ | Yes |`,
      },
    ],
    summary: ['Comparison-based sorts have a theoretical lower bound of Omega(N log N).'],
    keyPoints: [{ title: 'Lower Bound Theorem', detail: 'Any comparison sorting algorithm must perform Omega(N log N) comparisons in worst case.', badge: 'Theorem' }],
    mindMap: [{ title: 'Sorting', children: ['O(N²) Elementary Sorts', 'O(N log N) Divide & Conquer', 'Linear Time Sorts'] }],
    practiceQs: [{ question: 'Trace QuickSort on array [38, 27, 43, 3, 9, 82, 10] using first element as pivot.', marks: 10, year: '2024', difficulty: 'Medium', answerSnippet: 'Show partitioning and recursion tree.' }],
    videos: [{ title: 'Quick Sort Algorithm', educator: 'Abdul Bari', duration: '28:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+quick+sort' }],
  },
  {
    id: 'dsa-13',
    number: 13,
    shortTitle: 'Recursion & Backtracking',
    fullTitle: 'Recursion and Backtracking: Call Stack, N-Queens, Subset Sum',
    description: 'Base cases, state-space tree traversal, pruning, N-Queens problem.',
    notesCount: 5,
    notes: [
      {
        id: 'n-13-1',
        title: '1. N-Queens Backtracking Formulation',
        description: 'Row, column, and diagonal safety checks with state tree pruning.',
        pages: 12,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### N-Queens Problem
Place $N$ non-attacking chess queens on an $N \\times N$ board. Backtracking prunes branch whenever two queens share the same row, column, or diagonal.`,
      },
    ],
    summary: ['Backtracking explores solution space depth-first, reversing state when a constraint fails.'],
    keyPoints: [{ title: 'Pruning', detail: 'Bounding functions abandon invalid branches early, vastly reducing search space.', badge: 'Key Strategy' }],
    mindMap: [{ title: 'Backtracking', children: ['N-Queens', 'Subset Sum', 'Graph Coloring', 'Hamiltonian Cycle'] }],
    practiceQs: [{ question: 'Solve 4-Queens problem by drawing state-space tree.', marks: 10, year: '2022', difficulty: 'Medium', answerSnippet: 'Show board configurations and backtrack steps.' }],
    videos: [{ title: 'N-Queens Backtracking', educator: 'Abdul Bari', duration: '25:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+n+queens' }],
  },
  {
    id: 'dsa-14',
    number: 14,
    shortTitle: 'Greedy Algorithms',
    fullTitle: 'Greedy Paradigm: Fractional Knapsack, Activity Selection, Huffman',
    description: 'Greedy choice property, optimal substructure, Huffman prefix codes.',
    notesCount: 4,
    notes: [
      {
        id: 'n-14-1',
        title: '1. Huffman Coding Optimal Prefix Tree',
        description: 'Variable-length prefix code construction based on character frequency min-heap.',
        pages: 13,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Huffman Coding Algorithm
1. Create leaf node for each character with its frequency.
2. Build min-heap of nodes.
3. Repeatedly extract two minimum frequency nodes, combine under a new parent node, and push back.
4. Assign '0' to left branches, '1' to right branches. Produces optimal prefix code.`,
      },
    ],
    summary: ['Greedy algorithms make locally optimal decisions without revisiting previous choices.'],
    keyPoints: [{ title: 'Fractional vs 0/1', detail: 'Fractional Knapsack is solvable by Greedy; 0/1 Knapsack requires Dynamic Programming.', badge: 'Classic Comparison' }],
    mindMap: [{ title: 'Greedy Methods', children: ['Activity Selection', 'Fractional Knapsack', 'Huffman Codes', 'Job Sequencing'] }],
    practiceQs: [{ question: 'Generate Huffman code for characters A:45, B:13, C:12, D:16, E:9, F:5.', marks: 10, year: '2023', difficulty: 'Medium', answerSnippet: 'Show min-heap merges and resulting binary codewords.' }],
    videos: [{ title: 'Huffman Coding Explained', educator: 'Gate Smashers', duration: '16:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+huffman+coding' }],
  },
  {
    id: 'dsa-15',
    number: 15,
    shortTitle: 'String Algorithms',
    fullTitle: 'String Matching: KMP, Rabin-Karp, Z-Algorithm and Tries',
    description: 'Knuth-Morris-Pratt failure function, rolling hash, prefix matching.',
    notesCount: 4,
    notes: [
      {
        id: 'n-15-1',
        title: '1. KMP Algorithm & Longest Prefix Suffix (LPS)',
        description: 'Linear time string matching avoiding backtracking in the main text.',
        pages: 11,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Knuth-Morris-Pratt (KMP)
Constructs $\\pi$ (LPS) table in $O(M)$ time. Matches pattern in text of size $N$ in $O(N)$ time with zero character backtracking.`,
      },
    ],
    summary: ['KMP achieves O(N + M) string matching using precomputed prefix patterns.'],
    keyPoints: [{ title: 'LPS Table', detail: 'LPS[i] stores length of longest proper prefix that is also a suffix of pattern[0..i].', badge: 'Precomputation' }],
    mindMap: [{ title: 'Strings', children: ['Naive O(NM)', 'KMP O(N+M)', 'Rabin-Karp Rolling Hash', 'Trie Prefix Tree'] }],
    practiceQs: [{ question: 'Compute LPS table for pattern "ABABCABAB".', marks: 5, year: '2024', difficulty: 'Medium', answerSnippet: 'LPS = [0, 0, 1, 2, 0, 1, 2, 3, 4].' }],
    videos: [{ title: 'KMP Algorithm Visualized', educator: 'Abdul Bari', duration: '30:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+kmp' }],
  },
  {
    id: 'dsa-16',
    number: 16,
    shortTitle: 'Disjoint Set Union (DSU)',
    fullTitle: 'Disjoint Set Union: Union-Find, Path Compression and Rank',
    description: 'Near O(1) amortized set operations with inverse Ackermann complexity.',
    notesCount: 3,
    notes: [
      {
        id: 'n-16-1',
        title: '1. DSU Optimizations: Union by Rank & Path Compression',
        description: 'How path compression flattens tree depth to alpha(N) amortized time.',
        pages: 9,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Disjoint Set Union (DSU)
- **Path Compression**: \`parent[x] = find(parent[x])\`
- **Union by Rank**: Attach smaller rank tree under larger rank tree.
Amortized time per operation: $O(\\alpha(N)) \\approx O(1)$.`,
      },
    ],
    summary: ['DSU maintains dynamic partitions of an element set with near-instant union and find.'],
    keyPoints: [{ title: 'Ackermann Function', detail: 'alpha(N) <= 4 for all practical values of N up to 10^80.', badge: 'Complexity' }],
    mindMap: [{ title: 'DSU', children: ['Find Root', 'Union by Rank', 'Path Compression', 'Cycle Detection in Kruskal'] }],
    practiceQs: [{ question: 'Explain how DSU detects cycles in an undirected graph.', marks: 6, year: '2023', difficulty: 'Easy', answerSnippet: 'If find(u) == find(v) before adding edge (u, v), a cycle exists.' }],
    videos: [{ title: 'Disjoint Set Union-Find', educator: 'Abdul Bari', duration: '18:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+disjoint+set' }],
  },
  {
    id: 'dsa-17',
    number: 17,
    shortTitle: 'Trie (Prefix Tree)',
    fullTitle: 'Trie Data Structure: Prefix Tree for Dictionary Search and Autocomplete',
    description: 'Multiway tree for string retrieval, prefix search, and memory optimization.',
    notesCount: 4,
    notes: [
      {
        id: 'n-17-1',
        title: '1. Trie Node Representation & Word Operations',
        description: 'Insert, search, and startsWith operations in O(L) where L is string length.',
        pages: 10,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Trie Data Structure
Node structure contains 26 pointers for lowercase English letters:
\`\`\`c
struct TrieNode {
    struct TrieNode* children[26];
    bool isEndOfWord;
};
\`\`\`
Operations execute in $O(L)$ time where $L$ is the length of the string, completely independent of the number of dictionary keys!`,
      },
    ],
    summary: ['Tries store strings where edges represent characters and nodes mark complete words.'],
    keyPoints: [{ title: 'Search Complexity', detail: 'O(L) depends solely on word length, not on number of dictionary keys.', badge: 'Property' }],
    mindMap: [{ title: 'Trie Applications', children: ['Autocomplete', 'Spell Check', 'IP Routing (Longest Prefix Match)'] }],
    practiceQs: [{ question: 'Design and implement Trie insert and search in C++.', marks: 8, year: '2022', difficulty: 'Medium', answerSnippet: 'Provide class Trie with insert and search methods.' }],
    videos: [{ title: 'Trie Data Structure', educator: 'Gate Smashers', duration: '15:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+trie' }],
  },
  {
    id: 'dsa-18',
    number: 18,
    shortTitle: 'Segment Trees & Fenwick',
    fullTitle: 'Range Query Structures: Segment Trees and Binary Indexed Trees',
    description: 'Range sum queries, point updates, range updates with lazy propagation.',
    notesCount: 4,
    notes: [
      {
        id: 'n-18-1',
        title: '1. Segment Tree Construction & Lazy Propagation',
        description: 'O(log N) range query and update with lazy propagation state deferral.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Segment Tree
Represents array intervals hierarchically in $4N$ memory.
- **Build**: $O(N)$
- **Range Query**: $O(\\log N)$
- **Point Update**: $O(\\log N)$
- **Range Update (with Lazy Propagation)**: $O(\\log N)$`,
      },
    ],
    summary: ['Segment trees and Fenwick trees support O(log N) range queries and dynamic updates.'],
    keyPoints: [{ title: 'Lazy Propagation', detail: 'Postpones updates to descendants until range overlap query arrives.', badge: 'Optimization' }],
    mindMap: [{ title: 'Range Query Trees', children: ['Segment Tree (Array of 4N)', 'Fenwick Tree (BIT)', 'Lazy Propagation'] }],
    practiceQs: [{ question: 'Explain how Fenwick Tree updates prefix sums using 2s complement LSB trick.', marks: 8, year: '2023', difficulty: 'Hard', answerSnippet: 'LSB isolated via (i & -i).' }],
    videos: [{ title: 'Segment Tree Range Queries', educator: 'Abdul Bari', duration: '35:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+segment+tree' }],
  },
  {
    id: 'dsa-19',
    number: 19,
    shortTitle: 'Graph Traversal (BFS & DFS)',
    fullTitle: 'Advanced Graph Traversals: Connected Components, Bridges, Articulation Points',
    description: 'Tarjan and Kosaraju algorithms, discovery and low-link values.',
    notesCount: 5,
    notes: [
      {
        id: 'n-19-1',
        title: '1. Tarjan Algorithm for Bridges & Articulation Points',
        description: 'Finding critical network edges whose removal disconnects the graph.',
        pages: 13,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Articulation Points & Bridges
Using DFS discovery time \`tin[u]\` and lowest reachable ancestor time \`low[u]\`:
- Edge $(u, v)$ is a **Bridge** if \`low[v] > tin[u]\`.
- Vertex $u$ is an **Articulation Point** if \`low[v] >= tin[u]\` (with root node condition).`,
      },
    ],
    summary: ['Bridges and articulation points are vulnerability vertices/edges in communication networks.'],
    keyPoints: [{ title: 'Low-Link Value', detail: 'Tracks earliest discovery time reachable via DFS back-edges.', badge: 'Invariant' }],
    mindMap: [{ title: 'Connectivity', children: ['Strongly Connected Components (Kosaraju)', 'Bridges in Graphs', 'Articulation Points'] }],
    practiceQs: [{ question: 'Find all articulation points in given graph using Tarjan algorithm trace.', marks: 10, year: '2024', difficulty: 'Hard', answerSnippet: 'Calculate tin[] and low[] arrays for each vertex in DFS.' }],
    videos: [{ title: 'Bridges & Articulation Points', educator: 'Gate Smashers', duration: '20:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+articulation+points' }],
  },
  {
    id: 'dsa-20',
    number: 20,
    shortTitle: 'Shortest Path Algorithms',
    fullTitle: 'Shortest Paths: Dijkstra, Bellman-Ford, Floyd-Warshall',
    description: 'Non-negative vs negative edge weights, negative cycle detection, all-pairs shortest paths.',
    notesCount: 5,
    notes: [
      {
        id: 'n-20-1',
        title: '1. Dijkstra vs Bellman-Ford vs Floyd-Warshall',
        description: 'Single-source vs all-pairs shortest path algorithmic trade-offs.',
        pages: 15,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Shortest Path Comparison

| Algorithm | Type | Edge Weights | Time Complexity |
| :--- | :--- | :--- | :--- |
| **Dijkstra** | Single Source | Non-negative only | $O((V + E) \\log V)$ with Min-Heap |
| **Bellman-Ford** | Single Source | Negative weights allowed | $O(V \\times E)$ |
| **Floyd-Warshall** | All-Pairs | Negative weights allowed | $O(V^3)$ |`,
      },
    ],
    summary: ['Dijkstra requires non-negative weights; Bellman-Ford detects negative cycles in O(VE).'],
    keyPoints: [{ title: 'Negative Cycle Rule', detail: 'If distance relaxes on the V-th iteration of Bellman-Ford, a negative cycle exists.', badge: 'Detection' }],
    mindMap: [{ title: 'Shortest Paths', children: ['Dijkstra (Greedy Min-Heap)', 'Bellman-Ford (Dynamic Programming)', 'Floyd-Warshall (Matrix DP)'] }],
    practiceQs: [{ question: 'Trace Dijkstra algorithm from source node A on given weighted graph.', marks: 10, year: '2023', difficulty: 'Medium', answerSnippet: 'Tabulate visited vertices and tentative distance relaxations.' }],
    videos: [{ title: 'Dijkstra Algorithm Explained', educator: 'Abdul Bari', duration: '28:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+dijkstra' }],
  },
  {
    id: 'dsa-21',
    number: 21,
    shortTitle: 'Minimum Spanning Trees',
    fullTitle: 'Minimum Spanning Trees: Kruskal and Prim Algorithms',
    description: 'Greedy tree spanning, cut property, cycle prevention via DSU, priority queue optimization.',
    notesCount: 4,
    notes: [
      {
        id: 'n-21-1',
        title: '1. Kruskal vs Prim MST Formulation',
        description: 'Edge-centric vs vertex-centric minimum weight subgraph selection.',
        pages: 12,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Kruskal vs Prim Comparison
- **Kruskal**: Sort all edges ($O(E \\log E)$), greedily add non-cycle edges using DSU. Optimal for sparse graphs.
- **Prim**: Grow single tree from root using min-heap priority queue ($O((V + E) \\log V)$). Optimal for dense graphs.`,
      },
    ],
    summary: ['MST connects all V vertices with V-1 edges at minimum total edge weight.'],
    keyPoints: [{ title: 'Cut Property', detail: 'The minimum weight edge crossing any cut (S, V-S) belongs to some MST.', badge: 'Proof' }],
    mindMap: [{ title: 'MST Algorithms', children: ['Kruskal (Sort Edges + DSU)', 'Prim (Priority Queue + Cut Property)'] }],
    practiceQs: [{ question: 'Find MST using Kruskal algorithm for given graph. State total weight.', marks: 8, year: '2024', difficulty: 'Medium', answerSnippet: 'Sort edges by weight, add without creating cycles using DSU.' }],
    videos: [{ title: 'Prims and Kruskals Algorithms', educator: 'Abdul Bari', duration: '30:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+mst' }],
  },
  {
    id: 'dsa-22',
    number: 22,
    shortTitle: 'Topological Sort & DAGs',
    fullTitle: 'Topological Sorting: Kahn Algorithm & DFS Stack Ordering',
    description: 'Directed Acyclic Graphs (DAGs), task scheduling, in-degree queue processing.',
    notesCount: 3,
    notes: [
      {
        id: 'n-22-1',
        title: '1. Kahn Algorithm for Topological Sort',
        description: 'BFS-based in-degree queue processing with cycle detection.',
        pages: 9,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Kahn's BFS Algorithm
1. Compute in-degree for all vertices.
2. Push vertices with in-degree 0 into queue.
3. While queue is not empty: pop vertex, append to topological order, decrement in-degree of neighbors. If neighbor reaches in-degree 0, push to queue.
4. If topological order size < V, graph has a directed cycle!`,
      },
    ],
    summary: ['Topological sort orders DAG vertices such that for every directed edge u->v, u appears before v.'],
    keyPoints: [{ title: 'DAG Prerequisite', detail: 'Topological sort is strictly defined only for Directed Acyclic Graphs (DAGs).', badge: 'Condition' }],
    mindMap: [{ title: 'Topological Sort', children: ['Kahn In-Degree BFS', 'DFS Post-Order Reversal', 'Cycle Detection in Directed Graphs'] }],
    practiceQs: [{ question: 'Perform topological sort on course dependency DAG using Kahn algorithm.', marks: 7, year: '2022', difficulty: 'Easy', answerSnippet: 'Trace in-degree queue states step by step.' }],
    videos: [{ title: 'Topological Sorting Kahn Algorithm', educator: 'Gate Smashers', duration: '14:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+topological+sort' }],
  },
  {
    id: 'dsa-23',
    number: 23,
    shortTitle: 'Matrix Chain Multiplication',
    fullTitle: 'Matrix Chain Multiplication: Optimal Parenthesization and Catalan Numbers',
    description: 'Dynamic programming split index, cost recurrence, Catalan number count.',
    notesCount: 3,
    notes: [
      {
        id: 'n-23-1',
        title: '1. Matrix Chain DP Cost Formula',
        description: 'Minimizing scalar multiplications for matrix chain A1 x A2 x ... x An.',
        pages: 11,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Matrix Chain Recurrence
$$M[i, j] = \\min_{i \\le k < j} \\{ M[i, k] + M[k+1, j] + d_{i-1} d_k d_j \\}$$
Total parenthesizations equals Catalan number $C_{n-1} = \\frac{1}{n} \\binom{2n-2}{n-1}$.`,
      },
    ],
    summary: ['Matrix Chain Multiplication minimizes scalar multiplications across chained matrices.'],
    keyPoints: [{ title: 'Catalan Numbers', detail: 'Total bracketings grow as Omega(4^n / n^(3/2)), necessitating DP.', badge: 'Combinatorics' }],
    mindMap: [{ title: 'MCM', children: ['Recurrence Formula', 'DP Table Filling Along Diagonals', 'Optimal Parentheses Reconstruction'] }],
    practiceQs: [{ question: 'Find minimum multiplication cost for matrices with dimensions [10, 30, 5, 60].', marks: 10, year: '2024', difficulty: 'Hard', answerSnippet: 'Fill 3x3 DP cost table along diagonals.' }],
    videos: [{ title: 'Matrix Chain Multiplication', educator: 'Abdul Bari', duration: '32:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+matrix+chain+multiplication' }],
  },
  {
    id: 'dsa-24',
    number: 24,
    shortTitle: 'Longest Common Subsequence',
    fullTitle: 'LCS & Knapsack Variants: String Alignment and Subset Sum',
    description: '2D table reconstruction, edit distance, longest palindromic subsequence.',
    notesCount: 4,
    notes: [
      {
        id: 'n-24-1',
        title: '1. LCS Table Construction & Backtracking',
        description: 'Step-by-step table filling and character reconstruction.',
        pages: 12,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### LCS Recurrence
If $X[i-1] == Y[j-1]$:
$$LCS[i][j] = 1 + LCS[i-1][j-1]$$
Else:
$$LCS[i][j] = \\max(LCS[i-1][j], LCS[i][j-1])$$`,
      },
    ],
    summary: ['LCS determines the longest sequence appearing in both strings in identical order.'],
    keyPoints: [{ title: 'Subsequence vs Substring', detail: 'Subsequence characters do not need to be contiguous, unlike substring characters.', badge: 'Distinction' }],
    mindMap: [{ title: 'LCS Applications', children: ['Diff Tool / Git Merge', 'DNA Sequence Alignment', 'Shortest Common Supersequence'] }],
    practiceQs: [{ question: 'Find LCS of "AGGTAB" and "GXTXAYB" with 2D DP matrix.', marks: 10, year: '2023', difficulty: 'Medium', answerSnippet: 'LCS is "GTAB" with length 4.' }],
    videos: [{ title: 'Longest Common Subsequence DP', educator: 'Abdul Bari', duration: '26:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+lcs' }],
  },
  {
    id: 'dsa-25',
    number: 25,
    shortTitle: 'B-Trees & B+ Trees',
    fullTitle: 'B-Trees and B+ Trees: Multiway Search Trees for Disk Databases',
    description: 'Disk page block I/O, node splitting, range queries in B+ tree leaf linked lists.',
    notesCount: 4,
    notes: [
      {
        id: 'n-25-1',
        title: '1. B-Tree vs B+ Tree Database Architecture',
        description: 'Why relational databases (MySQL InnoDB, Postgres) use B+ trees for indexing.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### B-Tree vs B+ Tree
- **B-Tree**: Keys and records stored in both internal and leaf nodes.
- **B+ Tree**: Keys replicated; actual data pointers stored ONLY at leaf nodes. Leaf nodes linked as a doubly linked list, enabling lightning-fast range queries ($O(\\log N + K)$).`,
      },
    ],
    summary: ['B+ Trees minimize disk block I/O reads by maintaining wide branching factors.'],
    keyPoints: [{ title: 'Leaf Linked List', detail: 'B+ tree leaf nodes form a sequential linked list for range scans.', badge: 'Database Index' }],
    mindMap: [{ title: 'Multiway Trees', children: ['Order M B-Tree', 'B+ Tree (Leaves Linked)', 'Database Indexing'] }],
    practiceQs: [{ question: 'Insert keys into B-Tree of order 3 and show node split operations.', marks: 10, year: '2024', difficulty: 'Hard', answerSnippet: 'Show median key promotion to parent.' }],
    videos: [{ title: 'B Tree and B+ Tree Explained', educator: 'Gate Smashers', duration: '25:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+b+tree+b%2B+tree' }],
  },
  {
    id: 'dsa-26',
    number: 26,
    shortTitle: 'Red-Black & AVL Trees',
    fullTitle: 'Self-Balancing Trees: AVL Rotations & Red-Black Tree Invariants',
    description: 'LL, RR, LR, RL rotations, balance factor -1..+1, color properties in Linux kernel.',
    notesCount: 5,
    notes: [
      {
        id: 'n-26-1',
        title: '1. AVL Tree Rotations (LL, RR, LR, RL)',
        description: 'Strict balance factor maintenance ensuring O(log N) worst case.',
        pages: 15,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### AVL Rotations
Balance factor $BF = \\text{height}(Left) - \\text{height}(Right) \\in \\{-1, 0, 1\\}$.
- **LL Imbalance**: Right Rotation on root.
- **RR Imbalance**: Left Rotation on root.
- **LR Imbalance**: Left Rotation on child, then Right Rotation on root.
- **RL Imbalance**: Right Rotation on child, then Left Rotation on root.`,
      },
    ],
    summary: ['AVL trees maintain strict balance factor in {-1, 0, 1}; Red-Black trees balance via color properties.'],
    keyPoints: [{ title: 'AVL vs Red-Black', detail: 'AVL is faster for lookup-intensive workloads; Red-Black is faster for insertion/deletion heavy workloads.', badge: 'Engineering Trade-off' }],
    mindMap: [{ title: 'Self-Balancing', children: ['AVL Trees (Strict BF)', 'Red-Black Trees (Color Invariants)', 'Single & Double Rotations'] }],
    practiceQs: [{ question: 'Insert [10, 20, 30, 40, 50, 25] into AVL tree showing all rotations.', marks: 10, year: '2024', difficulty: 'Hard', answerSnippet: 'Show RR rotation at 10, RR at 20, RL at 30.' }],
    videos: [{ title: 'AVL Tree Rotations', educator: 'Abdul Bari', duration: '35:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+avl+tree' }],
  },
  {
    id: 'dsa-27',
    number: 27,
    shortTitle: 'Bit Manipulation & Advanced DSA',
    fullTitle: 'Bit Manipulation: XOR Tricks, Two Complement and Masking',
    description: 'Bitwise AND, OR, XOR, right/left shift, Kernighan set bit counting, bitmasking.',
    notesCount: 4,
    notes: [
      {
        id: 'n-27-1',
        title: '1. Essential Bit Manipulation Tricks',
        description: 'Brain Kernighan algorithm, power of two check, XOR cancellation properties.',
        pages: 10,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Bit Hacks Cheatsheet
- **Check Power of 2**: \`(n > 0) && ((n & (n - 1)) == 0)\`
- **Count Set Bits (Kernighan)**: \`while (n) { n &= (n - 1); count++; }\`
- **Isolate Lowest Set Bit**: \`n & (-n)\`
- **XOR Swap**: \`x ^= y; y ^= x; x ^= y;\`
- **Check k-th bit**: \`(n & (1 << k)) != 0\``,
      },
    ],
    summary: ['Bitwise operations operate at processor register speed in O(1) time.'],
    keyPoints: [{ title: 'XOR Identity', detail: 'x ^ x = 0 and x ^ 0 = x. Crucial for single non-duplicate number problem.', badge: 'Identity' }],
    mindMap: [{ title: 'Bit Manipulation', children: ['XOR Tricks', 'Bitmask DP', 'Kernighan Set Bit Counter'] }],
    practiceQs: [{ question: 'Find the single number appearing once in an array where every other number appears twice.', marks: 6, year: '2023', difficulty: 'Easy', answerSnippet: 'XOR all elements together in O(N) time and O(1) space.' }],
    videos: [{ title: 'Bit Manipulation Tricks', educator: 'Gate Smashers', duration: '18:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+bit+manipulation' }],
  },
];

export const SUBJECT_TOPICS_CATALOG: Record<string, TopicData[]> = {
  'Data structure and Algorithms': DSA_TOPICS,
  'Data Structures and Algorithms': DSA_TOPICS,
};
