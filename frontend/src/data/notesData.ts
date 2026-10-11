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

// ============================================================================
// COMPUTER ARCHITECTURE TOPICS & NOTES
// ============================================================================
export const CA_TOPICS: TopicData[] = [
  {
    id: 'ca-1',
    number: 1,
    shortTitle: 'CPU, ALU & Computer Arithmetic',
    fullTitle: 'Computer Architecture — Unit 1: CPU, ALU & Computer Arithmetic',
    description: 'Instruction cycles, addressing modes, Booth multiplication algorithm, and IEEE 754 floating point arithmetic.',
    notesCount: 4,
    notes: [
      {
        id: 'ca-n-1-1',
        title: '1. Instruction Format & Instruction Cycle',
        description: 'Opcode, register operands, memory addressing, Fetch-Decode-Execute cycle and timing diagrams.',
        pages: 12,
        format: 'PDF',
        color: 'red',
        status: 'completed',
        contentMarkdown: `### Instruction Format & The Instruction Cycle

#### 1. Instruction Formats
An instruction consists of an **Opcode** (Operation Code) and zero or more **Operands** (addresses or register specifiers).
- **Three-Address Instructions**: \`ADD R1, A, B\` (High register requirement, short code length).
- **Two-Address Instructions**: \`ADD R1, R2\` (Common in modern architectures).
- **One-Address Instructions**: \`ADD X\` (Uses implicit Accumulator AC).
- **Zero-Address Instructions**: \`ADD\` (Stack-based architecture, pops top 2 elements, pushes result).

#### 2. Instruction Cycle Phases
1. **Fetch**: CPU fetches instruction from memory address in Program Counter (PC) into Instruction Register (IR). $PC \\leftarrow PC + 1$.
2. **Decode**: Control unit decodes opcode and determines addressing mode.
3. **Effective Address Calculation**: Computes memory address of operands if indirect addressing is used.
4. **Execute**: ALU performs operation (e.g. arithmetic, logic, branch).
5. **Interrupt Check**: Checks for pending hardware interrupts before next fetch.`,
      },
      {
        id: 'ca-n-1-2',
        title: '2. Addressing Modes & Effective Address Calculation',
        description: 'Immediate, Direct, Indirect, Register Direct, Register Indirect, Indexed, Relative, and Base-Register modes.',
        pages: 14,
        format: 'PDF',
        color: 'blue',
        status: 'in_progress',
        contentMarkdown: `### Addressing Modes in Computer Architecture

Addressing modes specify the rule for interpreting the operand field to find the **Effective Address (EA)** in memory.

| Addressing Mode | Syntax | Effective Address (EA) | Key Application |
| :--- | :--- | :--- | :--- |
| **Immediate** | \`MOV R1, #5\` | Operand in instruction | Constant loading ($O(0)$ memory ref) |
| **Direct (Absolute)** | \`MOV R1, [1000]\` | $EA = A$ | Global variables |
| **Indirect** | \`MOV R1, @[1000]\` | $EA = M[A]$ | Pointers and references |
| **Register Direct** | \`MOV R1, R2\` | $EA = R$ | Fastest register operands |
| **Register Indirect**| \`MOV R1, [R2]\` | $EA = [R]$ | Iterating arrays via pointer |
| **PC-Relative** | \`JMP +20\` | $EA = PC + A$ | Position-independent branch/jump |
| **Indexed** | \`MOV R1, [R2 + 4]\` | $EA = R_{idx} + A$ | Array offset access $A[i]$ |
| **Auto-Increment** | \`MOV R1, (R2)+\` | $EA = [R2]; R2 += d$ | Stack/queue pop operations |`,
      },
      {
        id: 'ca-n-1-3',
        title: '3. Booth Multiplication Algorithm',
        description: 'Step-by-step arithmetic working for signed binary 2s complement multiplication.',
        pages: 10,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Booth's Multiplication Algorithm

Booth's algorithm multiplies signed integers in 2's complement notation by treating consecutive strings of 1s with a single subtraction and addition.

#### Algorithm Steps:
1. Multiplicand in $M$, Multiplier in $Q$, Accumulator $A = 0$, $Q_{-1} = 0$, Count $N = \\text{bit length}$.
2. Inspect $(Q_0, Q_{-1})$:
   - **$10$**: $A \\leftarrow A - M$ (subtract multiplicand)
   - **$01$**: $A \\leftarrow A + M$ (add multiplicand)
   - **$00$ or $11$**: No arithmetic operation.
3. Perform Arithmetic Right Shift (ARS) on $[A, Q, Q_{-1}]$.
4. Decrement count $N \\leftarrow N - 1$. If $N > 0$, repeat from step 2.

\`\`\`
Example: Multiply (+7) by (-3) in 4-bit representation
M = 0111 (+7), -M = 1001 (-7), Q = 1101 (-3)
Final product [A, Q] = 11101011 = -21 in 2's complement.
\`\`\``,
      },
      {
        id: 'ca-n-1-4',
        title: '4. IEEE 754 Floating-Point Standard',
        description: 'Single precision 32-bit and double precision 64-bit normalized representations and bias.',
        pages: 11,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### IEEE 754 Floating Point Representation

#### 32-Bit Single Precision Layout:
- **Sign bit ($S$)**: 1 bit (0 = positive, 1 = negative)
- **Biased Exponent ($E$)**: 8 bits (Bias = 127)
- **Normalized Mantissa ($M$)**: 23 bits (Hidden leading 1: $1.M$)

$$\\text{Value} = (-1)^S \\times 1.M \\times 2^{E - 127}$$

#### Special Values:
- **Zero**: $E = 0, M = 0$
- **Infinity**: $E = 255, M = 0$
- **NaN (Not a Number)**: $E = 255, M \\ne 0$
- **Denormalized**: $E = 0, M \\ne 0$ (Value $= (-1)^S \\times 0.M \\times 2^{-126}$)`,
      },
    ],
    summary: [
      'Instructions are executed through Fetch, Decode, Effective Address calculation, and Execute phases.',
      'Addressing modes reduce instruction bits while supporting pointers, arrays, and relative jumps.',
      'Booths algorithm accelerates signed multiplication by replacing sequences of 1s with two operations.',
      'IEEE 754 standardizes 32-bit single and 64-bit double precision floating point calculations.',
    ],
    keyPoints: [
      { title: 'Booth Recoding Table', detail: '00: No op, 01: Add M, 10: Sub M, 11: No op. Always followed by Arithmetic Right Shift (ARS).', badge: 'Core Formula' },
      { title: 'IEEE 754 Floating Point', detail: 'Single precision (32-bit): 1 sign + 8 exponent (bias 127) + 23 mantissa. Double: 1 + 11 (bias 1023) + 52.', badge: 'Standard' },
      { title: 'Instruction Cycle Phases', detail: 'Fetch -> Decode -> Read Effective Address -> Execute -> Check Interrupt. PC increments during fetch.', badge: 'Cycle' },
      { title: 'Addressing Modes Complexity', detail: 'Direct: EA = A. Indirect: EA = M[A]. Indexed: EA = Index Register + A. Relative: EA = PC + A.', badge: 'Effective Address' },
    ],
    mindMap: [
      { title: 'CPU & Arithmetic', children: ['Instruction Cycle', 'Addressing Modes', 'Booth Algorithm', 'IEEE 754 Floating Point'] },
    ],
    practiceQs: [
      {
        question: 'Multiply (+7) and (-5) using Booth multiplication algorithm. Show step-by-step register contents.',
        marks: 10,
        year: '2024',
        difficulty: 'Medium',
        answerSnippet: 'Multiplicand M = 0111, Multiplier Q = 1011. Show 4 cycles with A, Q, Q-1 values and ARS shift.',
      },
      {
        question: 'Differentiate between Direct, Indirect, and Indexed addressing modes with effective address formulas.',
        marks: 8,
        year: '2023',
        difficulty: 'Easy',
        answerSnippet: 'Direct: EA = A. Indirect: EA = M[A]. Indexed: EA = Index Register + A.',
      },
    ],
    videos: [
      { title: 'Booths Multiplication Algorithm Step-by-Step', educator: 'Gate Smashers', duration: '18:30', url: 'https://www.youtube.com/results?search_query=gate+smashers+booths+algorithm' },
      { title: 'Addressing Modes in Computer Architecture', educator: 'Neso Academy', duration: '22:15', url: 'https://www.youtube.com/results?search_query=neso+academy+addressing+modes' },
    ],
  },
  {
    id: 'ca-2',
    number: 2,
    shortTitle: 'Control Unit & System Architecture',
    fullTitle: 'Computer Architecture — Unit 2: Control Unit, RISC vs CISC & Amdahl Law',
    description: 'Von Neumann vs Harvard, RISC vs CISC, Hardwired vs Microprogrammed control units, and Amdahl Law.',
    notesCount: 4,
    notes: [
      {
        id: 'ca-n-2-1',
        title: '1. Von Neumann vs Harvard & RISC vs CISC',
        description: 'Instruction/data memory bus separation and architectural philosophy comparisons.',
        pages: 13,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Von Neumann vs Harvard Architecture

- **Von Neumann**: Unified memory for instructions and data. Single shared bus. Subject to the **Von Neumann Bottleneck** (throughput limited by bus bandwidth).
- **Harvard**: Physically separate instruction and data memories with separate buses. Enables simultaneous instruction fetch and data read/write.

### RISC vs CISC Architecture

| Feature | RISC (Reduced Instruction Set) | CISC (Complex Instruction Set) |
| :--- | :--- | :--- |
| **Instruction Count** | Large number of simple instructions | Small number of complex instructions |
| **Instruction Size** | Fixed (e.g. 32-bit) | Variable (1 to 15 bytes in x86) |
| **Addressing Modes** | Few (Load/Store only) | Many (Direct memory manipulation) |
| **Execution Cycle** | 1 cycle per instruction via pipelining | Multi-cycle microcode execution |
| **Registers** | Large general-purpose register file | Fewer specialized registers |
| **Examples** | ARM, MIPS, RISC-V | Intel x86, AMD64 |`,
      },
      {
        id: 'ca-n-2-2',
        title: '2. Amdahl Law & Performance Metrics',
        description: 'Speedup limits, CPI, MIPS, MFLOPS, and execution time equations.',
        pages: 9,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Amdahl's Law

Amdahl's law calculates the theoretical maximum speedup of a system when only a fraction $f$ of the task is accelerated by a factor $k$:

$$\\text{Speedup} = \\frac{1}{(1 - f) + \\frac{f}{k}}$$

As $k \\to \\infty$, the maximum possible speedup is bounded by $\\frac{1}{1 - f}$.

#### Processor Performance Equation:
$$\\text{CPU Execution Time} = \\text{Instruction Count} \\times \\text{CPI} \\times \\text{Clock Cycle Time}$$
Where $\\text{CPI}$ is Cycles Per Instruction.`,
      },
      {
        id: 'ca-n-2-3',
        title: '3. Hardwired vs Microprogrammed Control Unit',
        description: 'Combinational logic gates vs Control memory microcode ROM execution.',
        pages: 11,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Control Unit Design

1. **Hardwired Control Unit**: Built using combinational logic gates, decoders, and flip-flops. Fastest execution speed, but modifying control logic requires physical hardware redesign. Used in RISC.
2. **Microprogrammed Control Unit**: Control signals generated by reading micro-instructions from a Control Memory (ROM). Flexible and easy to update, but slower due to memory access latency. Used in CISC.`,
      },
    ],
    summary: [
      'Von Neumann uses shared memory; Harvard uses separate instruction and data paths.',
      'RISC focuses on simple single-cycle instructions; CISC focuses on dense complex instructions.',
      'Amdahl Law demonstrates that system speedup is strictly limited by the non-accelerated fraction.',
      'Hardwired control units offer maximum speed; microprogrammed units offer modular flexibility.',
    ],
    keyPoints: [
      { title: 'Amdahl Bound', detail: 'Speedup = 1 / ((1 - f) + f/k). If 20% cannot be parallelized, maximum possible speedup is strictly bounded by 5x.', badge: 'Formula' },
      { title: 'CPU Time Equation', detail: 'CPU Execution Time = Instruction Count * CPI * (1 / Clock Frequency).', badge: 'Key Metric' },
      { title: 'Von Neumann Bottleneck', detail: 'Shared memory bus for instructions and data limits throughput; Harvard uses separate physical buses.', badge: 'Architecture' },
      { title: 'Hardwired vs Microprogrammed', detail: 'Hardwired uses combinational logic gates (fastest, RISC); Microprogrammed uses control ROM (flexible, CISC).', badge: 'Trade-off' },
    ],
    mindMap: [
      { title: 'Architecture Paradigms', children: ['Von Neumann vs Harvard', 'RISC vs CISC', 'Amdahl Law', 'Hardwired vs Microprogrammed'] },
    ],
    practiceQs: [
      {
        question: 'State Amdahl Law. An application runs 80% parallel code. Find theoretical speedup with 8 processors and infinite processors.',
        marks: 8,
        year: '2024',
        difficulty: 'Medium',
        answerSnippet: 'f=0.8. With k=8: S = 1/(0.2 + 0.8/8) = 1/0.3 = 3.33x. With k=infinity: S = 1/0.2 = 5x.',
      },
    ],
    videos: [
      { title: 'RISC vs CISC Architecture', educator: 'Gate Smashers', duration: '14:40', url: 'https://www.youtube.com/results?search_query=gate+smashers+risc+vs+cisc' },
    ],
  },
  {
    id: 'ca-3',
    number: 3,
    shortTitle: 'Memory Hierarchy & Cache Mapping',
    fullTitle: 'Computer Architecture — Unit 3: Memory Hierarchy, Cache Mapping & Virtual Memory',
    description: 'Direct mapping, associative, set-associative cache, hit ratio, write policies, and virtual memory paging.',
    notesCount: 4,
    notes: [
      {
        id: 'ca-n-3-1',
        title: '1. Cache Memory Mapping Techniques',
        description: 'Tag, index, offset bit field calculations for Direct, Fully Associative, and Set-Associative mapping.',
        pages: 15,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Cache Mapping Techniques

#### 1. Direct Mapping
Each main memory block maps to exactly one cache line:
$$\\text{Line Number} = \\text{Block Number} \\pmod{\\text{Total Cache Lines}}$$
Address split: \`[ Tag | Line/Index | Block Offset ]\`
- **Pros**: Simple, fastest lookup.
- **Cons**: High conflict misses.

#### 2. Fully Associative Mapping
Main memory block can be placed in ANY cache line.
Address split: \`[ Tag | Block Offset ]\`
- **Pros**: Minimum conflict misses.
- **Cons**: Requires parallel comparator hardware across all tags ($O(1)$ expensive).

#### 3. K-Way Set Associative Mapping
Cache divided into sets of $K$ lines. Block maps to:
$$\\text{Set Number} = \\text{Block Number} \\pmod{\\text{Total Sets}}$$
Address split: \`[ Tag | Set Index | Block Offset ]\``,
      },
      {
        id: 'ca-n-3-2',
        title: '2. Average Memory Access Time (AMAT)',
        description: 'Hit ratio, cache hit latency, miss penalty, and multi-level cache access time derivations.',
        pages: 10,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Effective Memory Access Time (AMAT)

$$\\text{AMAT} = T_{\\text{cache}} + (1 - h) \\times T_{\\text{miss\\_penalty}}$$
Where $h$ is Cache Hit Ratio ($0 \\le h \\le 1$).

For two-level cache (L1 and L2):
$$\\text{AMAT} = T_{L1} + (1 - h_1) \\times [T_{L2} + (1 - h_2) \\times T_{\\text{main}}]$$`,
      },
    ],
    summary: [
      'Memory hierarchy exploits Temporal and Spatial Locality of Reference.',
      'Cache mapping resolves block collisions via Direct, Associative, or K-way set associative logic.',
      'Virtual memory translates virtual addresses into physical addresses via Page Tables and TLBs.',
    ],
    keyPoints: [
      { title: 'AMAT Equation', detail: 'AMAT = Hit Time + (Miss Rate * Miss Penalty). Two-level: T_L1 + (1 - h1)*(T_L2 + (1 - h2)*T_main).', badge: 'Core Formula' },
      { title: 'Cache Mapping Types', detail: 'Direct: Line = Block mod N (fast, high conflicts). Fully Assoc: Any line. Set Assoc: Set = Block mod S.', badge: 'Mapping Rule' },
      { title: 'Locality of Reference', detail: 'Temporal locality: data accessed recently will be accessed again soon. Spatial locality: nearby items accessed soon.', badge: 'Principle' },
      { title: 'Cache Write Policies', detail: 'Write-Through updates memory immediately; Write-Back updates only dirty cache line and writes to memory on eviction.', badge: 'Policy' },
    ],
    mindMap: [
      { title: 'Memory Hierarchy', children: ['Registers -> L1/L2 Cache -> Main RAM -> Secondary Disk', 'Cache Mapping', 'Virtual Memory TLB'] },
    ],
    practiceQs: [
      {
        question: 'A 2-way set-associative cache has 64 KB capacity with 16-byte blocks. For a 32-bit physical address, find Tag, Set, and Offset bits.',
        marks: 10,
        year: '2024',
        difficulty: 'Hard',
        answerSnippet: 'Offset = log2(16) = 4 bits. Lines = 64KB/16B = 4096. Sets = 4096/2 = 2048. Set bits = log2(2048) = 11 bits. Tag = 32 - 11 - 4 = 17 bits.',
      },
    ],
    videos: [
      { title: 'Cache Mapping Techniques (Direct, Associative, Set-Associative)', educator: 'Gate Smashers', duration: '25:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+cache+mapping' },
    ],
  },
  {
    id: 'ca-4',
    number: 4,
    shortTitle: 'Pipelining & Instruction Parallelism',
    fullTitle: 'Computer Architecture — Unit 4: Pipelining & Instruction-Level Parallelism',
    description: 'Pipelined execution, speedup, structural, data (RAW, WAR, WAW), and control hazards.',
    notesCount: 4,
    notes: [
      {
        id: 'ca-n-4-1',
        title: '1. Pipelining Principles & Speedup Derivation',
        description: 'K-stage pipeline timing, throughput, latency, and ideal speedup equations.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Pipelining Principles

Pipelining overlaps the execution of multiple instructions like an assembly line.

#### Pipeline Speedup Formulation:
For $N$ instructions and $K$ stages with clock cycle $\\tau$:
- **Non-Pipelined Time**: $T_{\\text{non-pipe}} = N \\times K \\times \\tau$
- **Pipelined Time**: $T_{\\text{pipe}} = [K + (N - 1)] \\times \\tau$

$$\\text{Speedup } S = \\frac{N \\times K \\times \\tau}{[K + (N - 1)] \\times \\tau} \\xrightarrow{N \\to \\infty} K$$
Ideal speedup equals the number of stages $K$.`,
      },
      {
        id: 'ca-n-4-2',
        title: '2. Pipeline Hazards & Resolution Strategies',
        description: 'Structural hazards, Data hazards (RAW, WAR, WAW), Control branch hazards, and forwarding.',
        pages: 12,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Pipeline Hazards

1. **Structural Hazards**: Hardware resource conflict (e.g. single memory port for instruction and data). Resolved by separate caches (Harvard architecture).
2. **Data Hazards**: Instruction depends on result of previous instruction still in the pipeline:
   - **RAW (Read After Write)**: True data dependency.
   - **WAR (Write After Read)**: Anti-dependency.
   - **WAW (Write After Write)**: Output dependency.
   - *Resolution*: Operand Forwarding / Bypassing, stall cycles (NOPs), or out-of-order execution.
3. **Control Hazards (Branch Hazards)**: Branch instruction changes PC. Resolved via Branch Prediction (Static/Dynamic) and Delayed Branching.`,
      },
    ],
    summary: [
      'Pipelining increases instruction throughput without reducing individual latency.',
      'Hazards cause pipeline stalls (bubbles) that degrade performance below ideal speedup K.',
      'Data forwarding routes ALU outputs directly to input stages, eliminating stalls.',
    ],
    keyPoints: [
      { title: 'Pipeline Speedup Limit', detail: 'Speedup = (N * K) / (K + N - 1) -> K stages as instruction count N becomes large.', badge: 'Speedup Limit' },
      { title: 'Data Hazards (RAW, WAR, WAW)', detail: 'Read-After-Write (RAW) is true data dependency; resolved via Operand Forwarding or Pipeline Stalls (bubbles).', badge: 'Hazard Resolution' },
      { title: 'Structural Hazards', detail: 'Hardware resource conflict (e.g. single memory port for instruction & data). Resolved via separate caches.', badge: 'Resource Conflict' },
      { title: 'Branch Penalty', detail: 'Control hazard caused by branch instructions. Resolved via static/dynamic branch prediction and branch delay slots.', badge: 'Branch Hazard' },
    ],
    mindMap: [
      { title: 'Pipelining', children: ['Pipeline Stages (IF, ID, EX, MEM, WB)', 'Speedup Formulation', 'Hazards (Structural, Data, Control)', 'Superscalar ILP'] },
    ],
    practiceQs: [
      {
        question: 'Identify data hazards in code: I1: ADD R1, R2, R3; I2: SUB R4, R1, R5; I3: AND R6, R1, R7. How does operand forwarding resolve it?',
        marks: 10,
        year: '2023',
        difficulty: 'Medium',
        answerSnippet: 'I2 and I3 have RAW dependency on R1. Forwarding routes ALU result of I1 directly into ALU inputs of I2 and I3 without memory stall.',
      },
    ],
    videos: [
      { title: 'Pipeline Hazards (Structural, Data, Control)', educator: 'Abdul Bari', duration: '32:15', url: 'https://www.youtube.com/results?search_query=abdul+bari+pipeline+hazards' },
    ],
  },
  {
    id: 'ca-5',
    number: 5,
    shortTitle: 'Parallel Architecture & Networks',
    fullTitle: 'Computer Architecture — Unit 5: Multiprocessor Architecture & Interconnection Networks',
    description: 'Flynns taxonomy, shared memory multiprocessors, cache coherence, and Omega/Crossbar networks.',
    notesCount: 3,
    notes: [
      {
        id: 'ca-n-5-1',
        title: '1. Flynns Taxonomy & Interconnection Networks',
        description: 'SISD, SIMD, MISD, MIMD, and multistage dynamic switching networks (Omega, Butterfly, Crossbar).',
        pages: 12,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Flynn's Classification of Computer Architectures

Based on number of concurrent instruction and data streams:
1. **SISD**: Single Instruction, Single Data (Traditional uniprocessor).
2. **SIMD**: Single Instruction, Multiple Data (Vector processors, GPUs).
3. **MISD**: Multiple Instruction, Single Data (Fault-tolerant space systems).
4. **MIMD**: Multiple Instruction, Multiple Data (Modern multi-core CPUs, clusters).

### Interconnection Networks
- **Crossbar Switch**: $O(N^2)$ non-blocking switches, highest bandwidth, expensive.
- **Multistage Interconnection Networks (MIN)**: Omega Network ($O(N \\log N)$ stages), Butterfly, Baseline.`,
      },
    ],
    summary: [
      'Flynns taxonomy classifies parallel architectures into SISD, SIMD, MISD, and MIMD.',
      'Multicore processors require hardware cache coherence protocols (e.g. MESI).',
    ],
    keyPoints: [
      { title: 'Flynn Taxonomy', detail: 'SISD (traditional uniprocessor), SIMD (vector processors, GPUs), MISD (fault-tolerant systems), MIMD (multicores, clusters).', badge: 'Taxonomy' },
      { title: 'DMA Transfer Modes', detail: 'Burst Mode transfers entire block holding system bus; Cycle Stealing steals individual bus cycles from CPU.', badge: 'DMA Modes' },
      { title: 'Memory-Mapped vs Isolated I/O', detail: 'Memory-Mapped I/O shares memory address space using MOV; Isolated I/O uses dedicated IN/OUT bus signals.', badge: 'I/O Mapping' },
      { title: 'Cache Coherence Problem', detail: 'In shared-memory multiprocessors, invalid/stale cached copies are reconciled via snooping protocols (MESI) or directories.', badge: 'Coherence' },
    ],
    mindMap: [
      { title: 'Parallel Computing', children: ['Flynns Taxonomy', 'Shared vs Distributed Memory', 'Interconnection Networks', 'Cache Coherence'] },
    ],
    practiceQs: [
      {
        question: 'Explain Flynns taxonomy with diagrams. Compare Crossbar switch and Omega network.',
        marks: 8,
        year: '2024',
        difficulty: 'Easy',
        answerSnippet: 'Draw 2x2 matrix for Single/Multiple Instruction and Data. Detail crossbar N^2 complexity vs Omega N log N.',
      },
    ],
    videos: [
      { title: 'Flynns Taxonomy in Parallel Architecture', educator: 'Gate Smashers', duration: '12:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+flynns+taxonomy' },
    ],
  },
];

// ============================================================================
// OPERATING SYSTEMS TOPICS & NOTES
// ============================================================================
export const OS_TOPICS: TopicData[] = [
  {
    id: 'os-1',
    number: 1,
    shortTitle: 'OS Concepts & System Calls',
    fullTitle: 'Operating Systems — Unit 1: Concepts, Architecture & System Calls',
    description: 'Kernel architectures, monolithic vs microkernel, dual-mode operation, and system call execution.',
    notesCount: 4,
    notes: [
      {
        id: 'os-n-1-1',
        title: '1. Operating System Architecture & Dual-Mode Operation',
        description: 'User mode vs Kernel mode, privileged instructions, trap handling, and monolithic vs microkernels.',
        pages: 12,
        format: 'PDF',
        color: 'red',
        status: 'completed',
        contentMarkdown: `### Operating System Architecture & Modes

#### 1. Dual-Mode Operation
Hardware protection uses a **Mode Bit** (0 = Kernel Mode, 1 = User Mode).
- **User Mode**: Application software executes with restricted hardware access.
- **Kernel Mode**: Operating system executes privileged instructions (I/O control, interrupt handling, MMU management).
- **Switching**: System call or hardware interrupt triggers a hardware **Trap**, switching mode bit $1 \\to 0$.`,
      },
    ],
    summary: ['Dual-mode operation prevents rogue user programs from corrupting OS kernel structures.'],
    keyPoints: [
      { title: 'Dual-Mode Operation', detail: 'Hardware mode bit switches between User Mode (1) and Kernel Mode (0) via software interrupt / Trap instruction.', badge: 'Security' },
      { title: 'Monolithic vs Microkernel', detail: 'Monolithic executes all services in kernel space (high speed); Microkernel keeps only IPC, memory, and scheduling in kernel.', badge: 'Architecture' },
      { title: 'Process Control Block (PCB)', detail: 'Contains process state, program counter, CPU registers, scheduling priority, and memory bounds.', badge: 'PCB Structure' },
      { title: 'Context Switch Overhead', detail: 'Saving old process state into PCB and restoring new process state is purely overhead with zero execution progress.', badge: 'CPU Overhead' },
    ],
    mindMap: [{ title: 'OS Basics', children: ['Dual-Mode', 'System Calls', 'Monolithic vs Microkernel'] }],
    practiceQs: [{ question: 'Differentiate between Monolithic Kernel and Microkernel architectures.', marks: 6, year: '2024', difficulty: 'Easy', answerSnippet: 'Monolithic runs all services in kernel space; Microkernel runs only IPC, memory, and scheduling in kernel space.' }],
    videos: [{ title: 'Operating System Architecture', educator: 'Neso Academy', duration: '20:00', url: 'https://www.youtube.com/results?search_query=neso+academy+operating+systems' }],
  },
  {
    id: 'os-2',
    number: 2,
    shortTitle: 'Processes & CPU Scheduling',
    fullTitle: 'Operating Systems — Unit 2: Process Management, Threads & CPU Scheduling',
    description: 'Process Control Block (PCB), context switching, preemptive vs non-preemptive scheduling (FCFS, SJF, RR).',
    notesCount: 5,
    notes: [
      {
        id: 'os-n-2-1',
        title: '1. CPU Scheduling Algorithms (FCFS, SJF, RR, Priority)',
        description: 'Gantt chart construction, waiting time, turnaround time, and response time calculations.',
        pages: 15,
        format: 'PDF',
        color: 'blue',
        status: 'in_progress',
        contentMarkdown: `### CPU Scheduling Algorithms

- **Turnaround Time (TAT)**: $\\text{Completion Time} - \\text{Arrival Time}$
- **Waiting Time (WT)**: $\\text{Turnaround Time} - \\text{Burst Time}$

#### Algorithms:
1. **FCFS (First-Come, First-Served)**: Non-preemptive. Suffers from Convoy Effect.
2. **SJF (Shortest Job First)**: Provably optimal minimum average waiting time.
3. **Round Robin (RR)**: Preemptive time-sliced scheduling. Quantum $Q$ determines performance.`,
      },
    ],
    summary: ['CPU scheduling balances fairness, throughput, and turnaround time across ready queue processes.'],
    keyPoints: [
      { title: 'Scheduling Metrics', detail: 'Turnaround Time = Completion - Arrival; Waiting Time = Turnaround - Burst; Response Time = First Run - Arrival.', badge: 'Formulas' },
      { title: 'Shortest Job First (SJF)', detail: 'Provably optimal minimum average waiting time; Shortest Remaining Time First (SRTF) is its preemptive variant.', badge: 'Theorem' },
      { title: 'Round Robin Quantum Tuning', detail: 'Excessive quantum degenerates into FCFS; tiny quantum causes severe context-switch overhead.', badge: 'Time Quantum' },
      { title: 'Convoy Effect in FCFS', detail: 'Short I/O-bound processes wait behind a single massive CPU-bound job, dropping device and CPU utilization.', badge: 'Pitfall' },
    ],
    mindMap: [{ title: 'Scheduling', children: ['FCFS', 'SJF / SRTF', 'Round Robin', 'Priority Scheduling'] }],
    practiceQs: [{ question: 'Calculate average waiting time and turnaround time for given processes under Round Robin with quantum 2.', marks: 10, year: '2024', difficulty: 'Medium', answerSnippet: 'Draw Gantt chart and compute completion times.' }],
    videos: [{ title: 'CPU Scheduling Algorithms', educator: 'Gate Smashers', duration: '25:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+cpu+scheduling' }],
  },
  {
    id: 'os-3',
    number: 3,
    shortTitle: 'Process Synchronization',
    fullTitle: 'Operating Systems — Unit 3: Synchronization, Semaphores & Classical Problems',
    description: 'Critical Section Problem, Petersons solution, Semaphores (Wait/Signal), and Dining Philosophers.',
    notesCount: 5,
    notes: [
      {
        id: 'os-n-3-1',
        title: '1. Semaphores & The Critical Section Problem',
        description: 'Mutual exclusion, progress, and bounded waiting requirements, binary and counting semaphores.',
        pages: 14,
        format: 'PDF',
        color: 'purple',
        status: 'not_started',
        contentMarkdown: `### Critical Section Problem

A critical section is code accessing shared mutable resources. Must satisfy:
1. **Mutual Exclusion**: Only one process in critical section at a time.
2. **Progress**: Selection of next process cannot be postponed indefinitely.
3. **Bounded Waiting**: Limit on times other processes enter critical section after request.

#### Counting Semaphore:
\`\`\`c
wait(S) {
    while (S <= 0); // busy wait
    S--;
}
signal(S) {
    S++;
}
\`\`\``,
      },
    ],
    summary: ['Semaphores prevent race conditions on shared memory across concurrent processes.'],
    keyPoints: [
      { title: 'Critical Section 3 Conditions', detail: 'Mutual Exclusion (one at a time), Progress (selection from interested only), Bounded Waiting (finite wait guarantee).', badge: 'Mandatory Rules' },
      { title: 'Semaphore Primitives', detail: 'wait(S): decrements S, blocks if S < 0; signal(S): increments S, wakes sleeping thread. Binary in {0,1}, Counting >= 0.', badge: 'Synchronization' },
      { title: 'Peterson Algorithm', detail: 'Two-process software mutual exclusion using flag[2] array and turn variable; strictly satisfies all 3 critical section rules.', badge: 'Algorithm' },
      { title: 'Classical Concurrency Problems', detail: 'Producer-Consumer (bounded buffer), Readers-Writers (starvation trade-off), and Dining Philosophers (deadlock avoidance).', badge: 'Classic Problems' },
    ],
    mindMap: [{ title: 'Synchronization', children: ['Critical Section', 'Petersons Solution', 'Semaphores', 'Monitors'] }],
    practiceQs: [{ question: 'Solve Producer-Consumer problem using counting and binary semaphores.', marks: 8, year: '2023', difficulty: 'Medium', answerSnippet: 'Use mutex=1, empty=N, full=0 with wait and signal calls.' }],
    videos: [{ title: 'Process Synchronization & Semaphores', educator: 'Abdul Bari', duration: '30:00', url: 'https://www.youtube.com/results?search_query=abdul+bari+process+synchronization' }],
  },
  {
    id: 'os-4',
    number: 4,
    shortTitle: 'Deadlocks & Bankers Algorithm',
    fullTitle: 'Operating Systems — Unit 4: Deadlock Conditions, Avoidance & Recovery',
    description: 'Coffman 4 conditions, Resource Allocation Graph (RAG), Bankers algorithm safety check.',
    notesCount: 4,
    notes: [
      {
        id: 'os-n-4-1',
        title: '1. Bankers Algorithm for Deadlock Avoidance',
        description: 'Safe state determination, Need matrix calculation, and resource request validation.',
        pages: 13,
        format: 'PDF',
        color: 'green',
        status: 'not_started',
        contentMarkdown: `### Deadlock & The Bankers Algorithm

#### 4 Coffman Conditions for Deadlock:
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

#### Bankers Safety Algorithm:
$$\\text{Need}[i][j] = \\text{Max}[i][j] - \\text{Allocation}[i][j]$$
Find process with $\\text{Need}_i \\le \\text{Available}$, allocate, simulate termination, add allocated to available until all finish safely.`,
      },
    ],
    summary: ['Deadlock requires all 4 Coffman conditions; Bankers algorithm maintains a safe state sequence.'],
    keyPoints: [
      { title: 'Coffman 4 Conditions', detail: 'Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. All 4 must simultaneously hold for deadlock.', badge: 'Conditions' },
      { title: 'Banker Algorithm Safety Invariant', detail: 'Need[i][j] = Max[i][j] - Allocation[i][j]. System state is safe iff a complete execution sequence exists without deadlock.', badge: 'Safety Rule' },
      { title: 'Resource Allocation Graph (RAG)', detail: 'If graph has no cycles, system is deadlock-free. If graph has a cycle and single-instance resources, deadlock is guaranteed.', badge: 'Detection' },
      { title: 'Deadlock Prevention vs Avoidance', detail: 'Prevention invalidates at least 1 Coffman condition statically; Avoidance checks runtime resource requests (Banker).', badge: 'Strategy' },
    ],
    mindMap: [{ title: 'Deadlocks', children: ['Prevention', 'Avoidance (Bankers)', 'Detection', 'Recovery'] }],
    practiceQs: [{ question: 'Given Allocation, Max, and Available matrices, determine if system is in safe state using Bankers algorithm.', marks: 10, year: '2024', difficulty: 'Medium', answerSnippet: 'Calculate Need matrix and determine safe sequence.' }],
    videos: [{ title: 'Bankers Algorithm Deadlock Avoidance', educator: 'Gate Smashers', duration: '22:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+bankers+algorithm' }],
  },
  {
    id: 'os-5',
    number: 5,
    shortTitle: 'Memory Management & Paging',
    fullTitle: 'Operating Systems — Unit 5: Paging, Segmentation & Virtual Memory',
    description: 'Logical to physical translation, page tables, TLB, page replacement (FIFO, LRU, Optimal), and thrashing.',
    notesCount: 5,
    notes: [
      {
        id: 'os-n-5-1',
        title: '1. Page Replacement Algorithms (FIFO, LRU, Optimal)',
        description: 'Beladys anomaly, LRU stack implementation, and optimal page replacement comparison.',
        pages: 14,
        format: 'PDF',
        color: 'red',
        status: 'not_started',
        contentMarkdown: `### Page Replacement Algorithms

When page fault occurs and no free frame exists:
1. **FIFO**: Evicts oldest loaded page. Suffers from **Belady\'s Anomaly** (increasing frame count can increase page faults!).
2. **Optimal**: Evicts page that will not be used for the longest future time. Theoretical lower bound.
3. **LRU (Least Recently Used)**: Evicts page that has not been referenced for the longest past time.`,
      },
    ],
    summary: ['Paging avoids external fragmentation; Virtual memory enables executing processes larger than physical RAM.'],
    keyPoints: [
      { title: 'Paging Address Translation', detail: 'Logical Address = [ Page (p) | Offset (d) ]. Physical Address = [ Frame (f) | Offset (d) ] with hardware page table lookup.', badge: 'Translation' },
      { title: 'Translation Lookaside Buffer (TLB)', detail: 'Effective Access Time (EAT) = h * (t_TLB + t_mem) + (1 - h) * (t_TLB + 2*t_mem), where h is the TLB hit ratio.', badge: 'Formula' },
      { title: 'Belady Anomaly in FIFO', detail: 'Increasing the number of allocated physical frames can paradoxically INCREASE total page faults under FIFO replacement.', badge: 'Anomaly' },
      { title: 'Thrashing & Working Set', detail: 'Occurs when process spends more time paging than executing; solved by allocating frames >= process working set size.', badge: 'Thrashing' },
    ],
    mindMap: [{ title: 'Memory', children: ['Paging & TLB', 'Segmentation', 'Page Replacement (LRU, FIFO)', 'Thrashing'] }],
    practiceQs: [{ question: 'Compute page faults for string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3 with 3 frames under FIFO and LRU.', marks: 10, year: '2024', difficulty: 'Medium', answerSnippet: 'Show frame allocation table for each page reference.' }],
    videos: [{ title: 'Page Replacement Algorithms (FIFO, LRU, Optimal)', educator: 'Gate Smashers', duration: '26:00', url: 'https://www.youtube.com/results?search_query=gate+smashers+page+replacement' }],
  },
  {
    id: 'os-6',
    number: 6,
    shortTitle: 'Storage & Disk Scheduling',
    fullTitle: 'Operating Systems — Unit 6: Storage, File Systems & Disk Scheduling',
    description: 'Disk geometry, seek time, FCFS, SSTF, SCAN (Elevator), C-SCAN, and UNIX inode file structure.',
    notesCount: 4,
    notes: [
      {
        id: 'os-n-6-1',
        title: '1. Disk Scheduling Algorithms (SCAN, C-SCAN, SSTF)',
        description: 'Total head movement calculation and seek time minimization across disk cylinders.',
        pages: 11,
        format: 'PDF',
        color: 'blue',
        status: 'not_started',
        contentMarkdown: `### Disk Scheduling Algorithms

Minimizes mechanical read/write head seek time:
- **FCFS**: Serves requests in arrival order.
- **SSTF (Shortest Seek Time First)**: Selects request closest to current head position. May cause starvation.
- **SCAN (Elevator)**: Head moves in one direction servicing requests until disk edge, then reverses.
- **C-SCAN**: Head moves in one direction to edge, then returns directly to start without servicing on return.`,
      },
    ],
    summary: ['Disk scheduling minimizes mechanical seek latency to maximize I/O throughput.'],
    keyPoints: [
      { title: 'SCAN (Elevator) Algorithm', detail: 'Disk arm moves in one direction servicing requests until edge, then reverses. Prevents starvation and balances wait times.', badge: 'Algorithm' },
      { title: 'C-SCAN Directional Uniformity', detail: 'Moves head to edge servicing requests, then immediately jumps back to start without servicing, providing uniform wait times.', badge: 'Uniform Latency' },
      { title: 'Disk Latency Components', detail: 'Total Access Time = Seek Time (moving head to track) + Rotational Latency (platter spin) + Transfer Time. Seek dominates.', badge: 'Components' },
      { title: 'UNIX Inode Architecture', detail: 'Uses direct block pointers for small files, single indirect, double indirect, and triple indirect pointers for large files.', badge: 'File System' },
    ],
    mindMap: [{ title: 'Storage', children: ['Disk Architecture', 'Disk Scheduling (SCAN, SSTF)', 'File Inodes'] }],
    practiceQs: [{ question: 'Calculate total head movement for requests [98, 183, 37, 122, 14, 124, 65, 67] starting at 53 using SCAN.', marks: 8, year: '2023', difficulty: 'Medium', answerSnippet: 'Show trajectory and total cylinder distance traveled.' }],
    videos: [{ title: 'Disk Scheduling Algorithms SCAN and CSCAN', educator: 'Neso Academy', duration: '18:00', url: 'https://www.youtube.com/results?search_query=neso+academy+disk+scheduling' }],
  },
];

// ============================================================================
// DYNAMIC SUBJECT TOPICS RESOLVER & KEY POINTS ENGINE
// ============================================================================
import { SUBJECT_PRESETS, type ChapterItem } from './subjectPresets';

export interface KeyPointItem {
  title: string;
  detail: string;
  badge?: string;
}

/**
 * Universal High-Yield Exam Key Points Engine
 * Guaranteed to generate 4-6 rich, formula-backed key points for EVERY topic in EVERY semester!
 */
export function generateKeyPointsForTopic(
  subjectName: string,
  topicTitle: string,
  subtopics: { title: string }[] = []
): KeyPointItem[] {
  const sLower = subjectName.toLowerCase();
  const tLower = topicTitle.toLowerCase();
  const points: KeyPointItem[] = [];

  // ==========================================
  // 1. SPECIFIC DSA & ALGORITHMIC TOPIC MATCHERS
  // ==========================================
  
  // A. Arrays & Linear Lists
  if ((tLower.includes('array') && !tLower.includes('suffix')) || tLower.includes('linear list')) {
    points.push(
      { title: 'Contiguous Address Calculation', detail: '1D: Address(A[i]) = Base + (i - lb)*w. 2D Row-Major: Base + (i*cols + j)*w; Col-Major: Base + (j*rows + i)*w.', badge: 'Core Formula' },
      { title: 'Amortized Array Doubling', detail: 'Dynamic array insertion takes O(1) amortized time. Doubling capacity at threshold guarantees sum of moves over N appends is <= 3N.', badge: 'Amortized O(1)' },
      { title: 'Two-Pointer Technique', detail: 'Reduces auxiliary memory to O(1) for in-place array reversal, two-sum on sorted arrays, partition, and Dutch National Flag sort.', badge: 'Optimization' },
      { title: 'Sparse Matrix Triplet Format', detail: 'Saves space by storing only non-zero elements as (Row, Column, Value) triplets; transforms O(R*C) memory to O(NonZeroCount).', badge: 'Sparse Storage' }
    );
    return points;
  }

  // B. Linked Lists
  if (tLower.includes('linked list') || tLower.includes('singly') || tLower.includes('doubly') || tLower.includes('circular list')) {
    points.push(
      { title: 'Pointers vs Array Contiguity', detail: 'Provides O(1) insertion and deletion once pointer is known, but requires O(N) sequential traversal with cache locality trade-off.', badge: 'Trade-off' },
      { title: 'Floyd Cycle Detection (Tortoise & Hare)', detail: 'Slow advances 1 step, Fast advances 2 steps. Meeting at loop distance k guarantees cycle presence; loop start found in O(N).', badge: 'Cycle Detection' },
      { title: 'In-Place List Reversal', detail: 'Iteratively updates next pointers using 3 pointers (prev, curr, next) in strict O(N) time and O(1) auxiliary space.', badge: 'O(1) Space' },
      { title: 'Doubly & Circular Variations', detail: 'Doubly linked lists enable O(1) bidirectional navigation and deletion; Circular lists link tail to head for round-robin scheduling.', badge: 'Architecture' }
    );
    return points;
  }

  // C. Stacks & Queues
  if (tLower.includes('stack') || tLower.includes('queue') || tLower.includes('deque')) {
    points.push(
      { title: 'LIFO vs FIFO Invariants', detail: 'Stack enforces Last-In-First-Out (Push/Pop at Top in O(1)); Queue enforces First-In-First-Out (Enqueue Rear, Dequeue Front in O(1)).', badge: 'Fundamental' },
      { title: 'Infix to Postfix (Shunting-Yard)', detail: 'Operators routed via precedence stack; Left Parenthesis has highest incoming precedence but lowest in-stack precedence.', badge: 'Expression Parse' },
      { title: 'Circular Queue Modulo Arithmetic', detail: 'Pointers advance as (index + 1) % Capacity. Full condition: (rear + 1) % capacity == front; Empty condition: front == rear == -1.', badge: 'Ring Buffer' },
      { title: 'Monotonic Stack Paradigm', detail: 'Maintains strictly monotonic order to solve Next Greater Element, Stock Span, and Largest Rectangle in Histogram in O(N) linear time.', badge: 'Monotonic O(N)' }
    );
    return points;
  }

  // D. Binary Trees & Traversals
  if ((tLower.includes('tree') && !tLower.includes('bst') && !tLower.includes('search') && !tLower.includes('b-tree') && !tLower.includes('spanning')) || tLower.includes('binary tree')) {
    points.push(
      { title: 'Tree Structural Limits', detail: 'Max nodes at level i is 2^i. Max nodes in height h is 2^(h+1) - 1. A tree with N nodes strictly has exactly N - 1 edges.', badge: 'Tree Invariant' },
      { title: 'Traversal Reconstructions', detail: 'Preorder (Root-L-R), Inorder (L-Root-R), Postorder (L-R-Root). A tree is uniquely constructible from Inorder + Preorder (or Inorder + Postorder).', badge: 'Traversals' },
      { title: 'Level-Order (Breadth-First)', detail: 'Iterates level-by-level using a FIFO queue; maximum queue memory equals maximum width of the tree (O(N) space).', badge: 'BFS Traversal' },
      { title: 'Catalan Number in Trees', detail: 'The number of structurally unique binary trees with N unlabeled nodes is C_N = (2N)! / ((N+1)! * N!).', badge: 'Combinatorics' }
    );
    return points;
  }

  // E. Binary Search Trees & Balanced Trees (BST, AVL, Red-Black)
  if (tLower.includes('binary search tree') || tLower.includes('bst') || tLower.includes('avl') || tLower.includes('red-black')) {
    points.push(
      { title: 'BST Ordering Invariant', detail: 'For every node X: all Left(X) < Key(X) < all Right(X). Inorder traversal yields sorted order in O(N) time.', badge: 'BST Invariant' },
      { title: 'Search & Height Complexities', detail: 'Lookup/Insertion takes O(log N) average, but degrades to O(N) on skewed input. Balance is preserved via tree rotations.', badge: 'Complexity' },
      { title: 'AVL Balance Factor', detail: 'Balance Factor = height(Left) - height(Right) in {-1, 0, 1}. Violations repaired via LL, RR, LR, RL rotations in O(1) time.', badge: 'AVL Rotations' },
      { title: 'Red-Black Tree Bounds', detail: 'Guarantees height <= 2*log2(N+1). Requires at most 2 rotations on insertion and 3 on deletion, making it superior for heavy writes.', badge: 'Red-Black Bound' }
    );
    return points;
  }

  // F. Heaps & Priority Queues
  if (tLower.includes('heap') || tLower.includes('priority queue')) {
    points.push(
      { title: 'Complete Binary Tree Array Mapping', detail: 'Parent at (i-1)/2, Left child at 2i + 1, Right child at 2i + 2. Zero explicit pointer storage overhead.', badge: 'Compact Array' },
      { title: 'Linear Build-Heap Time O(N)', detail: 'Bottom-up heap construction runs in O(N) time (sum of h/2^h converges to 2), which is strictly faster than N insertions O(N log N).', badge: 'Build O(N)' },
      { title: 'Heapify & Extract-Min/Max', detail: 'Extract root takes O(log N) via swap with last element and sift-down; Insert takes O(log N) via sift-up.', badge: 'Operation Bounds' },
      { title: 'K-th Element Selection', detail: 'Find K-th largest in O(N log K) using min-heap of size K; Heap Sort runs in O(N log N) in-place without auxiliary arrays.', badge: 'Applications' }
    );
    return points;
  }

  // G. Hashing
  if (tLower.includes('hashing') || tLower.includes('hash table') || tLower.includes('collision')) {
    points.push(
      { title: 'Collision Resolution Strategies', detail: 'Separate Chaining (linked lists per slot) vs Open Addressing (Linear Probing, Quadratic Probing, Double Hashing).', badge: 'Resolution' },
      { title: 'Load Factor & Rehashing', detail: 'Load factor alpha = n / m. When alpha exceeds threshold (typically 0.75), table doubles in size and rehashes all keys.', badge: 'Alpha Threshold' },
      { title: 'Clustering in Open Addressing', detail: 'Linear probing suffers from Primary Clustering (consecutive occupied slots); Double Hashing uses second hash h2(k) to prevent clustering.', badge: 'Clustering' },
      { title: 'Universal Hashing Guarantee', detail: 'Choosing a hash function randomly from a 2-universal family bounds expected collisions for any fixed key pair to <= 1/m.', badge: 'Universal Hash' }
    );
    return points;
  }

  // H. Searching & Sorting
  if (tLower.includes('searching') || tLower.includes('sorting') || tLower.includes('quick sort') || tLower.includes('merge sort')) {
    points.push(
      { title: 'Comparison Sort Lower Bound', detail: 'Any comparison-based sorting algorithm requires at least Omega(N log N) comparisons in the worst case (decision tree model).', badge: 'Omega(N log N)' },
      { title: 'Quick Sort Hoare vs Lomuto', detail: 'Average O(N log N), worst-case O(N²) on sorted inputs without randomized pivot. Hoare partition does 3x fewer swaps than Lomuto.', badge: 'Quick Sort' },
      { title: 'Merge Sort Stability', detail: 'Divides in half, sorts recursively, and merges in guaranteed O(N log N) time; highly stable but requires O(N) auxiliary array.', badge: 'Stable O(N log N)' },
      { title: 'Linear Non-Comparison Sorts', detail: 'Counting Sort and Radix Sort achieve linear O(N + K) and O(d*(N+K)) time when keys are discrete integers bounded by range K.', badge: 'Linear Sort' }
    );
    return points;
  }

  // I. Recursion & Backtracking
  if (tLower.includes('recursion') || tLower.includes('backtracking') || tLower.includes('n-queens')) {
    points.push(
      { title: 'Call Stack Activation Frames', detail: 'Every recursive invocation allocates stack space for local variables, arguments, and return PC; depth is bounded by max recursion depth.', badge: 'Call Stack' },
      { title: 'State-Space Tree Pruning', detail: 'Backtracking explores candidates systematically and prunes subtrees immediately once constraint violations are encountered.', badge: 'Pruning' },
      { title: 'N-Queens Constraints', detail: 'Checks row conflicts and diagonal conflicts (r - c and r + c) in O(1) using boolean hash arrays or bitmasks.', badge: 'Constraint O(1)' },
      { title: 'Tail Call Optimization (TCO)', detail: 'If the recursive call is the very last instruction, compiler reuses the current stack frame, reducing auxiliary stack space to O(1).', badge: 'TCO Rule' }
    );
    return points;
  }

  // J. Greedy Algorithms
  if (tLower.includes('greedy')) {
    points.push(
      { title: 'Greedy Choice Property', detail: 'A globally optimal solution is reached by making locally optimal decisions without reconsideration or backtracking.', badge: 'Greedy Rule' },
      { title: 'Fractional Knapsack O(N log N)', detail: 'Sorts items by value-to-weight ratio (v_i / w_i) descending; greedily takes full items and fractions of the boundary item.', badge: 'Knapsack' },
      { title: 'Huffman Prefix Coding', detail: 'Builds optimal binary prefix tree in O(N log N) using a min-heap; frequent characters receive shorter variable-length bit codes.', badge: 'Huffman' },
      { title: 'Activity Selection / Interval Scheduling', detail: 'Always choose the compatible activity with earliest finish time; yields maximum non-overlapping set in O(N log N).', badge: 'Earliest Finish' }
    );
    return points;
  }

  // K. String Matching & String Algorithms
  if (tLower.includes('string matching') || tLower.includes('string algorithm') || tLower.includes('kmp') || tLower.includes('rabin')) {
    points.push(
      { title: 'Naive String Matcher', detail: 'Scans all text shifts s in [0..N-M]; worst-case time is O((N - M + 1) * M) on repetitive inputs (e.g. text A^N, pattern A^(M-1)B).', badge: 'Worst Case O(NM)' },
      { title: 'KMP Prefix Function (LPS Table)', detail: 'LPS[i] stores the length of the longest proper prefix of Pattern[0..i] that is also a suffix. Precomputed in O(M) time.', badge: 'Precomputation O(M)' },
      { title: 'KMP Linear Text Scanning', detail: 'Guarantees O(N) comparisons without ever backtracking the text pointer. Overall time complexity is strictly O(N + M).', badge: 'Optimal O(N+M)' },
      { title: 'Rabin-Karp Rolling Hash', detail: 'Computes hash in O(1) via Horner rule: H = (d*(H - T[s]*h) + T[s+M]) mod q. Average time O(N+M), worst case O(NM) on spurious hits.', badge: 'Hash Metric' },
      { title: 'Boyer-Moore Heuristics', detail: 'Compares pattern from right to left; uses Bad Character Rule and Good Suffix Rule to achieve sub-linear average time O(N/M).', badge: 'Fastest in Practice' }
    );
    return points;
  }

  // L. Disjoint Set Union (DSU)
  if (tLower.includes('disjoint set') || tLower.includes('dsu') || tLower.includes('union find')) {
    points.push(
      { title: 'Inverse Ackermann Bound', detail: 'Path Compression plus Union by Rank reduces amortized cost per operation to O(alpha(N)) <= 4 for all practical inputs.', badge: 'O(alpha(N))' },
      { title: 'Path Compression Heuristic', detail: 'During find(x), flattens the tree structure by setting parent[x] = find(parent[x]), pointing all nodes directly to the root.', badge: 'Path Flatten' },
      { title: 'Union by Rank / Size', detail: 'Attaches the tree of lower rank beneath the root of the tree of higher rank, bounding tree depth to O(log N) without compression.', badge: 'Rank Heuristic' },
      { title: 'Connected Components & Kruskal', detail: 'Enables dynamic connected component maintenance and forms the backbone of Kruskal Minimum Spanning Tree algorithm.', badge: 'Applications' }
    );
    return points;
  }

  // M. Trie (Prefix Tree)
  if (tLower.includes('trie') || tLower.includes('prefix tree')) {
    points.push(
      { title: 'Word Length Bound O(L)', detail: 'Search, insert, and delete take O(L) time where L is string length, completely independent of the total number of dictionary words.', badge: 'O(L) Lookup' },
      { title: 'Prefix Retrieval & Autocomplete', detail: 'Traversing to prefix node and running DFS outputs all autocomplete suggestions sharing that common prefix.', badge: 'Prefix Match' },
      { title: 'Radix Tree Space Optimization', detail: 'Standard Trie wastes node memory on single-child chains; Patricia Trie / Radix Tree merges non-branching edges.', badge: 'Compression' },
      { title: 'Bitwise Trie for Maximum XOR', detail: 'Stores 32-bit binary representations to greedily query the path maximizing opposing bits in O(32) per lookup.', badge: 'Max XOR Pair' }
    );
    return points;
  }

  // N. Segment Trees & Fenwick Trees
  if (tLower.includes('segment tree') || tLower.includes('fenwick') || tLower.includes('binary indexed')) {
    points.push(
      { title: 'Logarithmic Range Queries', detail: 'Answers range sum/min/max in O(log N) time and point updates in O(log N) time using a 4N array representation.', badge: 'O(log N)' },
      { title: 'Lazy Propagation Range Updates', detail: 'Defers subtree updates until required by subsequent queries, enabling range updates in O(log N) instead of O(N).', badge: 'Lazy Update' },
      { title: 'Fenwick Tree Bit Isolation', detail: 'Computes prefix sums and point updates in O(log N) using index & (-index) bit logic with exact N auxiliary space.', badge: 'BIT i & (-i)' },
      { title: 'Static vs Dynamic Trade-off', detail: 'Fenwick is faster to code and cache-friendly; Segment Tree is required for non-invertible range operations (e.g. range min/max).', badge: 'Comparison' }
    );
    return points;
  }

  // O. Shortest Path Algorithms
  if (tLower.includes('shortest path') || tLower.includes('dijkstra') || tLower.includes('bellman') || tLower.includes('floyd')) {
    points.push(
      { title: 'Dijkstra Non-Negative Invariant', detail: 'Finds single-source shortest path in O((V + E) log V) with min-heap. Strictly requires non-negative edge weights (w(u,v) >= 0).', badge: 'Shortest Path' },
      { title: 'Bellman-Ford & Negative Cycles', detail: 'Relaxes all edges V-1 times in O(V*E). If distance relaxes on the V-th iteration, a reachable negative weight cycle is detected.', badge: 'Negative Cycle Rule' },
      { title: 'Floyd-Warshall All-Pairs DP', detail: 'Computes shortest paths for all pairs: D[i][j] = min(D[i][j], D[i][k] + D[k][j]) in O(V³) time and O(V²) space.', badge: 'All-Pairs O(V³)' },
      { title: 'Johnson Sparse All-Pairs', detail: 'Reweights graph using Bellman-Ford potential h(u) to eliminate negative weights, then runs V Dijkstra passes in O(V² log V + VE).', badge: 'Sparse Graphs' }
    );
    return points;
  }

  // P. Minimum Spanning Trees (MST)
  if (tLower.includes('minimum spanning') || tLower.includes('spanning tree') || tLower.includes('kruskal') || tLower.includes('prim')) {
    points.push(
      { title: 'Kruskal Greedy Edge Sorting', detail: 'Sorts all edges by weight in O(E log E) and adds edges connecting disjoint components using DSU cycle checks.', badge: 'Kruskal O(E log E)' },
      { title: 'Prim Vertex Growing', detail: 'Grows a single tree from starting vertex using priority queue; runs in O(E log V) time, superior for dense graphs.', badge: 'Prim O(E log V)' },
      { title: 'Cut and Cycle Properties', detail: 'Cut Property: Minimum weight edge crossing any cut belongs to MST. Cycle Property: Maximum weight edge in any cycle cannot be in MST.', badge: 'Core Properties' },
      { title: 'MST Spanning Invariant', detail: 'A minimum spanning tree for a connected graph of V vertices always contains exactly V - 1 edges and minimum total weight.', badge: 'Invariant' }
    );
    return points;
  }

  // Q. Topological Sort & DAGs
  if (tLower.includes('topological sort') || tLower.includes('dag')) {
    points.push(
      { title: 'DAG Existence Condition', detail: 'A topological sorting exists if and only if the directed graph contains NO directed cycles (must be a Directed Acyclic Graph).', badge: 'DAG Rule' },
      { title: 'Kahn In-Degree BFS Algorithm', detail: 'Enqueues vertices with in-degree 0; processes edges and decrements neighbour in-degrees in O(V + E). If output < V, cycle detected.', badge: 'Kahn O(V+E)' },
      { title: 'DFS Finish-Time Ordering', detail: 'Runs DFS and pushes nodes onto stack upon completion; reversing finishing times gives valid topological order in O(V + E).', badge: 'DFS Stack' },
      { title: 'Longest Path & Critical Path', detail: 'Finds longest path / critical path in scheduling projects in linear O(V + E) time using topological order relaxation.', badge: 'Scheduling' }
    );
    return points;
  }

  // R. Dynamic Programming: MCM & LCS
  if (tLower.includes('matrix chain') || tLower.includes('mcm')) {
    points.push(
      { title: 'MCM Recurrence Relation', detail: 'm[i,j] = min(m[i,k] + m[k+1,j] + p_{i-1}*p_k*p_j) for i <= k < j. Base case: m[i,i] = 0.', badge: 'Recurrence' },
      { title: 'DP Matrix Evaluation Order', detail: 'Fills DP table along diagonals of increasing chain length L from 2 to N; overall time complexity is O(N³) with O(N²) space.', badge: 'O(N³) Bounds' },
      { title: 'Failure of Greedy Approaches', detail: 'Greedily multiplying adjacent matrices with smallest intermediate product fails because early choices compound higher later costs.', badge: 'Non-Greedy' },
      { title: 'Optimal Parenthesization Split', detail: 'Auxiliary table s[i,j] records the split point k that achieved the minimum, enabling recursive formula reconstruction.', badge: 'Reconstruction' }
    );
    return points;
  }

  if (tLower.includes('longest common subsequence') || tLower.includes('lcs')) {
    points.push(
      { title: 'LCS State Transition', detail: 'If X[i-1] == Y[j-1]: c[i,j] = c[i-1,j-1] + 1; else c[i,j] = max(c[i-1,j], c[i,j-1]). Solvable in O(M*N) time.', badge: 'Recurrence' },
      { title: 'Space Reduction Optimization', detail: 'Because current row depends only on previous row, full 2D table space can be compressed to 2 rows O(min(M, N)).', badge: 'Space O(N)' },
      { title: 'Backtracking Subsequence', detail: 'Tracing back from cell (M, N) to (0, 0) following matching characters yields the exact string subsequence.', badge: 'String Alignment' },
      { title: 'Diff & Bio-Informatics Usage', detail: 'Forms the algorithmic foundation of Git diff file comparisons and DNA sequence homology matching.', badge: 'Industry Standard' }
    );
    return points;
  }

  // S. B-Trees & B+ Trees
  if (tLower.includes('b-tree') || tLower.includes('b+ tree')) {
    points.push(
      { title: 'High Branching Factor M', detail: 'Self-balancing multiway search tree designed for block-storage disks; minimizes slow I/O reads by keeping tree height low.', badge: 'Disk Optimized' },
      { title: 'B+ Tree Leaf Sequential Chain', detail: 'All actual data records reside in leaf nodes connected as a doubly linked list, enabling lightning-fast range queries.', badge: 'Range Scans' },
      { title: 'Node Invariants & Split Rules', detail: 'Every node except root contains at least ceil(M/2) children. Full nodes split at median key and propagate upwards.', badge: 'Balance Rule' },
      { title: 'Database Indexing Standard', detail: 'Primary underlying engine for relational database indexes (MySQL InnoDB, PostgreSQL) and filesystem storage (ext4, NTFS).', badge: 'RDBMS Engine' }
    );
    return points;
  }

  // T. Bit Manipulation
  if (tLower.includes('bit manipulation') || (tLower.includes('bit') && !tLower.includes('arbitrary'))) {
    points.push(
      { title: 'Brian Kernighan Set Bit Count', detail: 'n &= (n - 1) clears lowest set bit in each step; counts all 1-bits in O(Number of Set Bits) operations.', badge: 'Kernighan Trick' },
      { title: 'Power of Two Verification', detail: '(n > 0) && ((n & (n - 1)) == 0) checks if a positive integer is an exact power of two in constant O(1) time.', badge: 'O(1) Check' },
      { title: 'Lowest Set Bit Extraction', detail: 'n & (-n) isolates the rightmost set bit via two complement arithmetic; key trick in Fenwick tree navigation.', badge: 'Lowest Bit' },
      { title: 'XOR Involutive Properties', detail: 'a ^ a = 0 and a ^ 0 = a. Finds single non-duplicate element among pairs and enables O(1) memoryless variable swapping.', badge: 'XOR Magic' }
    );
    return points;
  }

  // U. Complexity Classes & NP-Completeness (DAA Chapter 5)
  if (tLower.includes('complexity class') || tLower.includes('np-complete') || tLower.includes('sat') || tLower.includes('clique')) {
    points.push(
      { title: 'Class P vs Class NP', detail: 'P: Decision problems solvable in deterministic polynomial time O(N^k). NP: Decision problems verifiable in polynomial time given a certificate.', badge: 'Fundamental' },
      { title: 'Cook-Levin Theorem', detail: 'Proved that Boolean Satisfiability (SAT) is NP-Complete, establishing the foundation of all polynomial-time reduction proofs.', badge: 'Foundation' },
      { title: 'Polynomial Reductions (A <=p B)', detail: 'If problem A reduces to B in polynomial time and B in P, then A in P. To prove B is NP-Complete: show B in NP and A <=p B for known NP-C A.', badge: 'Proof Rule' },
      { title: 'Canonical NP-Complete Problems', detail: '3-SAT, Vertex Cover, Maximum Clique, Hamiltonian Cycle, Traveling Salesman Problem (decision), Subset Sum, and Graph Coloring.', badge: 'GATE List' }
    );
    return points;
  }

  // ==========================================
  // 2. DISCIPLINE & SUBJECT-WIDE EXAM ENGINES
  // ==========================================

  // Mathematics (Calculus, Linear Algebra, ODE, Probability)
  if (sLower.includes('math') || sLower.includes('calculus') || sLower.includes('algebra') || sLower.includes('probability')) {
    points.push(
      { title: 'Rank-Nullity Theorem', detail: 'For linear transformation T: V -> W, Rank(T) + Nullity(T) = dim(V). Determines system solvability AX = B.', badge: 'Linear Algebra' },
      { title: 'Cayley-Hamilton Theorem', detail: 'Every square matrix satisfies its own characteristic equation det(A - lambda*I) = 0; used to compute A^(-1) and A^k directly.', badge: 'Matrix Power' },
      { title: 'Taylor & Maclaurin Expansions', detail: 'f(x) = sum(f^(n)(a)/n! * (x - a)^n). For two variables: f(x+h, y+k) expands using partial derivatives and Hessian matrix.', badge: 'Calculus' },
      { title: 'Bayes Theorem & Total Probability', detail: 'P(A|B) = [P(B|A)*P(A)] / P(B). Crucial for updating posterior hypotheses from observed engineering evidence.', badge: 'Bayes Rule' },
      { title: 'Vector Integral Theorems', detail: 'Gauss Divergence transforms flux to volume integral; Stokes theorem relates curl on surface to circulation around boundary.', badge: 'Vector Calculus' }
    );
    return points;
  }

  // Engineering Physics
  if (sLower.includes('physics')) {
    points.push(
      { title: 'Wave Interference & Fringe Width', detail: 'Fringe width beta = (lambda * D) / d in Young double slit; conditions for constructive interference: path diff delta = n*lambda.', badge: 'Wave Optics' },
      { title: 'Laser Population Inversion', detail: 'Stimulated emission exceeds absorption when population N2 > N1 via optical pumping in 3-level or 4-level metastable systems.', badge: 'Lasers' },
      { title: 'Heisenberg Uncertainty Principle', detail: 'Delta x * Delta p >= hbar / 2. Limits simultaneous precision of conjugate mechanical variables in quantum scales.', badge: 'Quantum Bound' },
      { title: 'Schrödinger Wave Equation', detail: 'Time-independent wave equation: (-hbar²/2m) * nabla² psi + V*psi = E*psi. Quantizes electron energy in potential wells.', badge: 'Wave Mechanics' },
      { title: 'Semiconductor Band Theory', detail: 'Fermi level E_F sits at mid-gap in intrinsic semiconductors; shifts toward conduction band in n-type and valence band in p-type.', badge: 'Band Gap' }
    );
    return points;
  }

  // Basic Electrical Engineering
  if (sLower.includes('electrical')) {
    points.push(
      { title: 'Kirchhoff Circuit Laws', detail: 'KCL (Current conservation at node: Sum(I) = 0) and KVL (Voltage sum around closed loop: Sum(V) = 0).', badge: 'Circuit Laws' },
      { title: 'Thevenin & Norton Equivalents', detail: 'Any linear two-terminal circuit reduces to V_th in series with R_th, or I_N in parallel with R_N (R_th = R_N).', badge: 'Network Theorems' },
      { title: 'Maximum Power Transfer', detail: 'Maximum power is transferred from source to load when load impedance equals complex conjugate of source impedance: R_L = R_th.', badge: 'Max Power' },
      { title: 'AC Resonance & Power Factor', detail: 'Resonant frequency f_0 = 1 / (2*pi*sqrt(L*C)). Power factor cos(phi) = R / Z; low power factor causes high transmission I²R losses.', badge: 'AC Resonance' },
      { title: 'Transformer EMF Equation', detail: 'Induced EMF E = 4.44 * f * N * Phi_max. Ideal transformation ratio: V1/V2 = N1/N2 = I2/I1.', badge: 'Transformers' }
    );
    return points;
  }

  // Programming in C / Problem Solving
  if (sLower.includes('programming') || sLower.includes('(c)') || sLower.includes('problem solving')) {
    points.push(
      { title: 'Pointer Memory Arithmetic', detail: 'ptr + 1 advances address by sizeof(*ptr) bytes. Dereference *ptr accesses value; &ptr accesses variable memory address.', badge: 'Pointers' },
      { title: 'Heap vs Stack Memory Allocation', detail: 'Local variables live in call stack frame; malloc/calloc allocate dynamic memory from heap and must be freed with free().', badge: 'Memory Heap' },
      { title: 'Structures vs Unions', detail: 'Struct allocates sum of member sizes plus memory alignment padding; Union shares single memory block of size equal to largest member.', badge: 'Data Types' },
      { title: 'Storage Classes in C', detail: 'auto (stack local), register (CPU register hint), static (retains value across calls), extern (global across translation units).', badge: 'Storage Class' }
    );
    return points;
  }

  // Engineering Graphics & Design
  if (sLower.includes('graphics') || sLower.includes('engineering design')) {
    points.push(
      { title: 'First vs Third Angle Projection', detail: '1st Angle: Object between observer and plane (Plan below Elevation). 3rd Angle: Plane between observer and object.', badge: 'Projection Rule' },
      { title: 'Isometric Scale Factor', detail: 'Isometric length = sqrt(2/3) * True length = 0.816 * True length. Lines inclined at 30 degrees to the horizontal axis.', badge: 'Isometric 0.816' },
      { title: 'Sectional Views & Hatching', detail: 'Cross-hatching lines drawn at 45 degrees to baseline; reveals internal cavities and holes without confusing hidden lines.', badge: 'Drafting Rule' },
      { title: 'CAD Geometric Dimensioning (GD&T)', detail: 'Specifies engineering tolerances, datum reference planes, parallelism, perpendicularity, and surface runout symbols.', badge: 'Tolerancing' }
    );
    return points;
  }

  // Engineering Chemistry
  if (sLower.includes('chemistry')) {
    points.push(
      { title: 'Nernst Equation for Cell EMF', detail: 'E_cell = E0_cell - (2.303*RT / nF) * log(Q). Relates reduction potential to reaction quotient and temperature.', badge: 'Electrochemistry' },
      { title: 'Water Hardness & EDTA Titration', detail: 'Temporary hardness caused by bicarbonates of Ca/Mg (removed by boiling); permanent hardness measured via EDTA titration at pH 10.', badge: 'Water Tech' },
      { title: 'Phase Rule (Gibbs)', detail: 'F = C - P + 2. Degrees of freedom F calculated from components C and phases P in thermodynamic equilibrium.', badge: 'Phase Rule' },
      { title: 'Electrochemical Corrosion & Protection', detail: 'Galvanic corrosion occurs at anode; prevented via cathodic protection (sacrificial Zn/Mg anodes) or electroplating.', badge: 'Corrosion' }
    );
    return points;
  }

  // Constitution of India & Ethics
  if (sLower.includes('constitution') || sLower.includes('ethics')) {
    points.push(
      { title: 'Preamble Constitutional Axioms', detail: 'Declares India as a Sovereign, Socialist, Secular, Democratic, Republic guaranteeing Justice, Liberty, Equality, Fraternity.', badge: 'Constitution' },
      { title: 'Fundamental Rights (Part III)', detail: 'Articles 14-32 protect Right to Equality, Freedom, Life (Art 21), and Constitutional Remedies (Art 32 Writs).', badge: 'Civil Rights' },
      { title: 'Directive Principles & Fundamental Duties', detail: 'DPSPs (Part IV) guide welfare governance; Article 51A establishes 11 Fundamental Duties of every citizen.', badge: 'Governance' },
      { title: 'Engineering Professional Ethics', detail: 'IEEE/ACM code emphasizes public safety, environmental sustainability, confidentiality, conflict of interest, and whistleblowing.', badge: 'Code of Ethics' }
    );
    return points;
  }

  // Design Thinking & Innovation
  if (sLower.includes('design thinking') || sLower.includes('innovation')) {
    points.push(
      { title: '5-Stage Design Thinking Framework', detail: 'Empathize (user observations) -> Define (problem statement) -> Ideate (brainstorming) -> Prototype -> Test.', badge: 'Design Thinking' },
      { title: 'Divergent vs Convergent Thinking', detail: 'Divergent phase generates wide range of creative possibilities; Convergent phase selects and refines best viable concepts.', badge: 'Ideation' },
      { title: 'Minimum Viable Product (MVP)', detail: 'Simplest version of a product deployed to validate core assumptions with real users while minimizing expenditure.', badge: 'MVP Validation' },
      { title: 'Human-Centered Needfinding', detail: 'Uncovers latent, unmet emotional and functional user needs through stakeholder journey maps and empathy interviews.', badge: 'Human-Centered' }
    );
    return points;
  }

  // Formal Language & Automata Theory (FLAT / TOC)
  if (sLower.includes('formal language') || sLower.includes('automata') || sLower.includes('toc') || sLower.includes('computation')) {
    points.push(
      { title: 'DFA vs NFA Equivalence', detail: 'Both recognize regular languages. Any NFA with N states converts to an equivalent DFA with at most 2^N states (subset construction).', badge: 'Automata' },
      { title: 'Pumping Lemma for Regular Languages', detail: 'For regular L, any w with |w| >= p splits into xyz such that |xy| <= p, |y| >= 1, and xy^i z in L for all i >= 0.', badge: 'Pumping Lemma' },
      { title: 'Context-Free Languages & Pushdown Automata', detail: 'CFLs generated by CFGs are accepted by non-deterministic PDAs; deterministic PDAs accept strictly fewer languages.', badge: 'CFL & PDA' },
      { title: 'Turing Machines & Halting Problem', detail: 'Turing Machines define computable functions. Halting problem is undecidable (no general algorithm can determine if TM terminates).', badge: 'Undecidability' },
      { title: 'Chomsky Hierarchy', detail: 'Type 3 (Regular, FA) subset of Type 2 (CFL, PDA) subset of Type 1 (CSL, LBA) subset of Type 0 (Recursively Enumerable, TM).', badge: 'Hierarchy' }
    );
    return points;
  }

  // Software Engineering
  if (sLower.includes('software engineering')) {
    points.push(
      { title: 'SDLC Process Models', detail: 'Waterfall (strictly linear/inflexible) vs Agile Scrum (iterative 2-4 week sprints with continuous customer feedback).', badge: 'SDLC' },
      { title: 'McCabe Cyclomatic Complexity', detail: 'V(G) = E - N + 2P where E=edges, N=nodes, P=connected components. Determines minimum independent test paths.', badge: 'Testing Metric' },
      { title: 'Cohesion vs Coupling', detail: 'Strive for High Cohesion (elements within module strongly related) and Low Loose Coupling (minimal dependencies between modules).', badge: 'Architecture' },
      { title: 'Design Patterns (GoF)', detail: 'Creational (Singleton, Factory), Structural (Adapter, Decorator), and Behavioral (Observer, Strategy) reusable templates.', badge: 'Design Patterns' }
    );
    return points;
  }

  // Compiler Design
  if (sLower.includes('compiler')) {
    points.push(
      { title: 'Compiler 6-Phase Pipeline', detail: 'Lexical Analysis -> Syntax Analysis -> Semantic Analysis -> Intermediate Code Gen -> Optimization -> Target Code Gen.', badge: 'Pipeline' },
      { title: 'LL(1) Parsing Table Condition', detail: 'Grammar is LL(1) iff for all A -> alpha | beta: FIRST(alpha) cap FIRST(beta) = empty, and if alpha -> eps, FIRST(beta) cap FOLLOW(A) = empty.', badge: 'LL(1) Grammar' },
      { title: 'LR Parsing Conflicts', detail: 'Shift-Reduce conflict occurs when parser cannot decide to shift next token or reduce; Reduce-Reduce occurs between two reductions.', badge: 'LR Parsing' },
      { title: 'Three-Address Code (3AC)', detail: 'Linear intermediate form with at most 3 operands per instruction (x = y op z); implemented as Quadruples or Triples.', badge: '3AC Code' },
      { title: 'DAG & Basic Block Optimization', detail: 'Directed Acyclic Graphs eliminate common subexpressions and dead code within basic blocks without changing semantics.', badge: 'Optimization' }
    );
    return points;
  }

  // Microprocessors & Microcontrollers
  if (sLower.includes('microprocessor') || sLower.includes('microcontroller') || sLower.includes('8085') || sLower.includes('8086')) {
    points.push(
      { title: '8085 Register Architecture', detail: '8-bit Accumulator, Flags (S, Z, AC, P, CY), 16-bit Program Counter (PC), Stack Pointer (SP), and general pairs (BC, DE, HL).', badge: '8085 CPU' },
      { title: '8086 Segmented Memory Address', detail: 'Physical 20-bit address = (Segment Register * 16) + Offset Register. Enables 1 MB addressing with 16-bit internal registers.', badge: '20-bit Physical' },
      { title: 'Interrupt Priority Hierarchy', detail: '8085 interrupts: TRAP (non-maskable, highest priority) > RST 7.5 > RST 6.5 > RST 5.5 > INTR (maskable, lowest).', badge: 'Interrupts' },
      { title: 'Instruction Machine Cycles', detail: 'Composed of T-states (clock periods). Opcode Fetch takes 4T (or 6T); Memory Read and Write take 3T states each.', badge: 'Timing T-States' }
    );
    return points;
  }

  // Information Theory & Coding
  if (sLower.includes('information theory') || sLower.includes('coding theory')) {
    points.push(
      { title: 'Shannon Entropy Formula', detail: 'H(X) = -sum(p_i * log2(p_i)) bits/symbol. Represents the average uncertainty or information content per source symbol.', badge: 'Entropy' },
      { title: 'Shannon Channel Capacity (Hartley-Shannon)', detail: 'C = B * log2(1 + S/N) bits/sec. Maximum error-free transmission rate achievable over noisy bandwidth B with SNR.', badge: 'Capacity C' },
      { title: 'Huffman Source Coding', detail: 'Greedy tree construction yields optimal prefix-free code with average code length L bounded by H(X) <= L < H(X) + 1.', badge: 'Optimal Prefix' },
      { title: 'Hamming Distance & Error Bounds', detail: 'Minimum distance d_min detects up to d_min - 1 errors and corrects up to floor((d_min - 1) / 2) errors.', badge: 'Hamming Code' }
    );
    return points;
  }

  // Cloud Computing
  if (sLower.includes('cloud')) {
    points.push(
      { title: 'NIST Cloud Service Models', detail: 'IaaS (virtual machines, storage e.g. AWS EC2), PaaS (managed platforms e.g. Heroku, App Engine), SaaS (software applications e.g. M365).', badge: 'Cloud Models' },
      { title: 'Type 1 vs Type 2 Hypervisors', detail: 'Type 1 (Bare-Metal, ESXi, Xen) runs directly on hardware; Type 2 (Hosted, VirtualBox) runs on host operating system.', badge: 'Virtualization' },
      { title: 'Elastic Autoscaling & SLA', detail: 'Horizontal scaling (adding VM nodes) vs Vertical scaling (adding CPU/RAM); SLA guarantees 99.99% availability downtime boundaries.', badge: 'Scalability' },
      { title: 'Object vs Block vs File Storage', detail: 'Object storage (S3) stores metadata+key globally; Block storage (EBS) attaches as raw disk; File storage (EFS/NFS) shares directory.', badge: 'Storage Types' }
    );
    return points;
  }

  // Web and Internet Technology
  if (sLower.includes('web') || sLower.includes('internet technology')) {
    points.push(
      { title: 'HTTP/1.1 vs HTTP/2 vs HTTP/3', detail: 'HTTP/1.1 uses keep-alive; HTTP/2 introduces binary framing and multiplexing over single TCP connection; HTTP/3 runs on UDP (QUIC).', badge: 'HTTP Evolution' },
      { title: 'DOM & Event Delegation', detail: 'Events travel through Capturing -> Target -> Bubbling phases; event delegation attaches single listener to common parent.', badge: 'DOM Events' },
      { title: 'RESTful API Constraints', detail: 'Statelessness (each request contains all context), Cacheable, Uniform Interface, Client-Server separation.', badge: 'REST Standard' },
      { title: 'CORS & Web Security (OWASP)', detail: 'Same-Origin Policy blocks cross-origin fetches; Cross-Origin Resource Sharing (CORS) headers allow whitelist; protect vs XSS and CSRF.', badge: 'Web Security' }
    );
    return points;
  }

  // Deep Learning & Neural Networks
  if (sLower.includes('deep learning') || sLower.includes('neural')) {
    points.push(
      { title: 'Backpropagation & Gradient Descent', detail: 'Computes gradients via chain rule: dL/dw = dL/dy * dy/dz * dz/dw; weights updated using learning rate eta: w = w - eta * grad.', badge: 'Backpropagation' },
      { title: 'Activation Functions & Vanishing Gradients', detail: 'Sigmoid saturates at tails causing vanishing gradient; ReLU max(0, x) provides non-saturating derivative 1 for positive inputs.', badge: 'Activations' },
      { title: 'CNN Architecture Components', detail: 'Convolutional filters extract spatial features with parameter sharing; Pooling reduces spatial dimensions (translation invariance).', badge: 'CNN Layers' },
      { title: 'RNN Vanishing Gradient & LSTM Gating', detail: 'Standard RNN cannot retain long dependencies; LSTM uses Forget, Input, and Output gates with linear cell state highway.', badge: 'LSTM Memory' },
      { title: 'Transformer Self-Attention', detail: 'Attention(Q, K, V) = softmax((Q*K^T) / sqrt(d_k)) * V. Replaces sequential recurrences with parallel all-to-all token attention.', badge: 'Attention' }
    );
    return points;
  }

  // Digital Image Processing
  if (sLower.includes('image processing')) {
    points.push(
      { title: 'Spatial Domain Convolution', detail: 'Convolves kernel mask across pixels: g(x, y) = sum(w(s, t) * f(x+s, y+t)). Smoothing uses Gaussian; edge detection uses Sobel/Prewitt.', badge: 'Spatial Filtering' },
      { title: 'Histogram Equalization', detail: 'Spreads out most frequent pixel intensity values using Cumulative Distribution Function (CDF) to enhance global contrast.', badge: 'Histogram' },
      { title: 'Frequency Domain Transforms', detail: '2D Discrete Fourier Transform (DFT) separates low spatial frequencies (smooth areas) from high frequencies (sharp edges, noise).', badge: 'Fourier DFT' },
      { title: 'Morphological Operations', detail: 'Erosion shrinks bright objects; Dilation expands them; Opening (erosion followed by dilation) removes small noise without size distortion.', badge: 'Morphology' }
    );
    return points;
  }

  // Big Data & Analytics
  if (sLower.includes('big data') || sLower.includes('analytics')) {
    points.push(
      { title: '4 V of Big Data Systems', detail: 'Volume (scale of data), Velocity (speed of streaming data), Variety (structured, semi, unstructured), Veracity (trustworthiness).', badge: 'Big Data 4V' },
      { title: 'Hadoop HDFS Architecture', detail: 'Master NameNode manages directory metadata; Slave DataNodes store 128MB block chunks replicated 3 times across server racks.', badge: 'HDFS 3x' },
      { title: 'MapReduce Distributed Model', detail: 'Map parses and emits intermediate (key, value) pairs; Shuffle & Sort routes identical keys to same node; Reduce aggregates results.', badge: 'MapReduce' },
      { title: 'Apache Spark In-Memory RDDs', detail: 'Resilient Distributed Datasets (RDDs) execute transformations lazily via DAG; in-memory caching runs up to 100x faster than MapReduce.', badge: 'Spark RDD' }
    );
    return points;
  }

  // Natural Language Processing (NLP)
  if (sLower.includes('natural language') || sLower.includes('nlp')) {
    points.push(
      { title: 'Text Preprocessing Pipeline', detail: 'Tokenization breaks text into words/subwords; Stopword removal discards frequent filler; Stemming and Lemmatization reduce to root form.', badge: 'Text Pipeline' },
      { title: 'TF-IDF Vector Space Model', detail: 'TF-IDF = TF(t, d) * log(N / DF(t)). Penalizes frequent words across entire corpus while rewarding terms distinctive to document d.', badge: 'TF-IDF' },
      { title: 'Word Embeddings (Word2Vec)', detail: 'Continuous Bag of Words (CBOW predicts target from context) and Skip-Gram (predicts context from target); captures semantic vector analogies.', badge: 'Word2Vec' },
      { title: 'Modern Pretrained Transformers', detail: 'BERT uses bidirectional masked language modeling (encoder-only); GPT uses causal autoregressive next-token prediction (decoder-only).', badge: 'Transformers' }
    );
    return points;
  }

  // Distributed Systems
  if (sLower.includes('distributed')) {
    points.push(
      { title: 'CAP Theorem (Brewer)', detail: 'In any distributed data store, you can guarantee at most two out of three: Consistency, Availability, and Partition Tolerance.', badge: 'CAP Theorem' },
      { title: 'Logical Clocks & Causality', detail: 'Physical clocks drift; Lamport Timestamps order events with a -> b => L(a) < L(b). Vector Clocks determine exact concurrent events.', badge: 'Vector Clocks' },
      { title: 'Raft Consensus Protocol', detail: 'Leader Election via heartbeats and randomized election timeouts; Log Replication requires quorum majority (N/2 + 1) confirmation.', badge: 'Consensus' },
      { title: 'Consistent Hashing Ring', detail: 'Maps nodes and keys to a 360-degree hash ring; adding or removing server nodes moves only K/N keys, preventing total rehash.', badge: 'Consistent Hash' }
    );
    return points;
  }

  // Cyber Security & Cryptography
  if (sLower.includes('security') || sLower.includes('cryptography')) {
    points.push(
      { title: 'Symmetric vs Asymmetric Ciphers', detail: 'Symmetric (AES, DES) uses single shared secret key (fast); Asymmetric (RSA, ECC) uses public/private key pair (secure key exchange).', badge: 'Cipher Classes' },
      { title: 'RSA Mathematical Equations', detail: 'Keys: n = p*q, phi = (p-1)*(q-1), e*d = 1 mod phi. Encryption: C = M^e mod n; Decryption: M = C^d mod n based on Euler theorem.', badge: 'RSA Algorithm' },
      { title: 'Diffie-Hellman Key Exchange', detail: 'Enables two parties to establish shared secret over insecure channel: shared secret K = (g^b)^a mod p = (g^a)^b mod p.', badge: 'Key Exchange' },
      { title: 'Cryptographic Hashing & Signatures', detail: 'SHA-256 provides pre-image and collision resistance; Digital Signature signs hash with private key, verifiable with public key.', badge: 'Signatures' }
    );
    return points;
  }

  // High Performance Computing (HPC)
  if (sLower.includes('high performance') || sLower.includes('hpc')) {
    points.push(
      { title: 'Amdahl Law vs Gustafson Law', detail: 'Amdahl calculates speedup limit for fixed problem size: S = 1 / ((1-f) + f/k); Gustafson measures weak scaling for scalable problems.', badge: 'Scaling Laws' },
      { title: 'Shared Memory vs Distributed (OpenMP/MPI)', detail: 'OpenMP uses multithreaded compiler pragmas on shared RAM; MPI uses explicit message passing (MPI_Send, MPI_Recv) across nodes.', badge: 'MPI & OpenMP' },
      { title: 'GPU CUDA Thread Hierarchy', detail: 'Threads grouped into Warps of 32 threads; Warps form Thread Blocks assigned to Streaming Multiprocessors (SMs) on global grid.', badge: 'CUDA Warps' },
      { title: 'Interconnection Topologies', detail: 'Crossbar (non-blocking, expensive O(N²)), 2D Torus, Hypercube, and Fat-Tree; evaluated by diameter, degree, and bisection bandwidth.', badge: 'Topologies' }
    );
    return points;
  }

  // Quantum Computing
  if (sLower.includes('quantum')) {
    points.push(
      { title: 'Qubit Superposition State', detail: 'State |psi> = alpha|0> + beta|1> where probability amplitudes satisfy |alpha|² + |beta|² = 1. Measurement collapses state.', badge: 'Superposition' },
      { title: 'Quantum Logic Gates', detail: 'Hadamard gate H creates equal superposition; Pauli X flips bit; CNOT creates 2-qubit entanglement when control is |1>.', badge: 'Quantum Gates' },
      { title: 'Entanglement & Bell States', detail: 'Entangled particles share correlated outcomes instantaneously: |Phi+> = (|00> + |11>) / sqrt(2). Proves No-Cloning theorem.', badge: 'Entanglement' },
      { title: 'Grover & Shor Speedup', detail: 'Grover database search runs in quadratic speedup O(sqrt(N)); Shor prime factorization runs in polynomial time O((log N)³).', badge: 'Quantum Speedup' }
    );
    return points;
  }

  // Capstone System Design
  if (sLower.includes('capstone') || sLower.includes('system design')) {
    points.push(
      { title: 'Microservices Decomposition', detail: 'Single Responsibility Principle applied to services; communicates via REST JSON or high-performance gRPC Protobuf.', badge: 'Microservices' },
      { title: 'Database Sharding & Replication', detail: 'Master-Slave replication provides high read scalability; Horizontal sharding (hash-based or range-based) partitions write throughput.', badge: 'Data Scalability' },
      { title: 'Distributed Caching Strategies', detail: 'Cache-Aside (lazy loading), Write-Through, and Write-Back policies using Redis or Memcached to prevent DB saturation.', badge: 'Caching Layer' },
      { title: 'Asynchronous Event Queues', detail: 'Message brokers (Apache Kafka, RabbitMQ) decouple producers from consumers, buffer traffic spikes, and guarantee delivery.', badge: 'Event-Driven' }
    );
    return points;
  }

  // Discrete Mathematics
  if (sLower.includes('discrete')) {
    points.push(
      { title: 'Equivalence Relation Axioms', detail: 'Relation R on A is an equivalence relation iff it is Reflexive, Symmetric, and Transitive.', badge: 'Equivalence' },
      { title: 'Partial Order & Hasse Diagram', detail: 'Poset relation satisfies Reflexivity, Antisymmetry (aRb and bRa => a=b), and Transitivity. Hasse diagrams omit reflexive loops & transitive edges.', badge: 'Poset' },
      { title: 'Pigeonhole Principle', detail: 'If n items are placed into k containers and n > k, at least one container contains >= ceil(n/k) items.', badge: 'Counting Rule' },
      { title: 'Inclusion-Exclusion Principle', detail: '|A U B U C| = |A| + |B| + |C| - (|A cap B| + |B cap C| + |C cap A|) + |A cap B cap C|.', badge: 'Set Formula' }
    );
    return points;
  }

  // Digital Logic
  if (sLower.includes('digital logic')) {
    points.push(
      { title: 'Two Complement Arithmetic', detail: 'Range of n-bit signed 2s complement is [-2^(n-1), 2^(n-1) - 1]. Negative representation: 1s complement + 1.', badge: 'Range Rule' },
      { title: 'Karnaugh Map Minimization', detail: 'Groups must be powers of 2 (1, 2, 4, 8, 16) adjacent in Gray code ordering to eliminate redundant literals.', badge: 'K-Map Rule' },
      { title: 'Universal Gates', detail: 'NAND and NOR gates are universal; any combinational circuit can be realized solely using either gate.', badge: 'Logic Synthesis' },
      { title: 'Full Adder Equations', detail: 'Sum = A xor B xor Cin; Cout = AB + BCin + ACin. Requires 2 Half Adders and 1 OR gate.', badge: 'Adder Equations' }
    );
    return points;
  }

  // DBMS
  if (sLower.includes('database') || sLower.includes('dbms')) {
    points.push(
      { title: 'Three-Schema Architecture', detail: 'Physical, Conceptual/Logical, and External View schemas ensure Physical and Logical Data Independence.', badge: 'Architecture' },
      { title: 'Relational Normalization', detail: '1NF: Atomic values; 2NF: No partial dependency; 3NF: No transitive dependency; BCNF: Determinant must be superkey.', badge: 'Normal Forms' },
      { title: 'ACID Properties', detail: 'Atomicity (All-or-Nothing), Consistency (Preserves constraints), Isolation (Serializability), Durability (Write-Ahead Logging).', badge: 'ACID Rules' },
      { title: 'Two-Phase Locking (2PL)', detail: 'Growing Phase (locks acquired, none released) and Shrinking Phase (locks released, none acquired) guarantees Conflict Serializability.', badge: 'Concurrency' }
    );
    return points;
  }

  // Computer Networks
  if (sLower.includes('network')) {
    points.push(
      { title: 'OSI 7-Layer Protocol Stack', detail: 'Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application.', badge: 'OSI Model' },
      { title: 'Sliding Window Efficiency', detail: 'Efficiency eta = N / (1 + 2a) where a = Tprop / Ttrans. Go-Back-N window <= 2^k - 1; Selective Repeat window <= 2^(k-1).', badge: 'ARQ Efficiency' },
      { title: 'CSMA/CD Minimum Frame Size', detail: 'Transmission time must be >= 2 * Propagation time (Ttrans >= 2*Tprop) to ensure collision detection across network span.', badge: 'Ethernet Rule' },
      { title: 'TCP 3-Way Handshake', detail: 'Client sends SYN -> Server returns SYN-ACK -> Client sends ACK. Connection teardown uses 4-way FIN/ACK sequence.', badge: 'Handshake' }
    );
    return points;
  }

  // Machine Learning
  if (sLower.includes('machine learning')) {
    points.push(
      { title: 'Bias-Variance Tradeoff', detail: 'Total Error = Bias² + Variance + Irreducible Error. High bias indicates underfitting; high variance indicates overfitting.', badge: 'Model Evaluation' },
      { title: 'L1 (Lasso) vs L2 (Ridge)', detail: 'L1 adds lambda*|w| forcing non-informative weights to 0 (sparse feature selection); L2 adds lambda*w² shrinking weights smoothly.', badge: 'Regularization' },
      { title: 'Decision Tree Splitting', detail: 'Entropy = -sum(p * log2 p); Gini = 1 - sum(p²). Random Forests use Bagging with feature subsampling to reduce variance.', badge: 'Ensemble' },
      { title: 'Support Vector Machine Margin', detail: 'Maximizes margin 2/||w|| between classes. Kernel Trick computes high-dimensional dot products K(x, z) = phi(x)^T phi(z) implicitly.', badge: 'SVM Optimization' }
    );
    return points;
  }

  // Artificial Intelligence
  if (sLower.includes('artificial intelligence') || sLower.includes('ai')) {
    points.push(
      { title: 'PEAS Framework', detail: 'Specifies Performance measure, Environment type (observable, deterministic, episodic, static, discrete), Actuators, and Sensors.', badge: 'Agent Design' },
      { title: 'A* Search Admissibility', detail: 'Evaluation f(n) = g(n) + h(n). A* is guaranteed optimal if heuristic h(n) never overestimates true cost to goal (h(n) <= h*(n)).', badge: 'Search Optimality' },
      { title: 'Alpha-Beta Pruning Bounds', detail: 'Prunes branches that cannot influence the final decision (alpha >= beta cutoff), reducing search branching factor from b^d to b^(d/2).', badge: 'Minimax Pruning' },
      { title: 'Forward vs Backward Chaining', detail: 'Forward chaining is data-driven (starts with premises to derive goals); Backward chaining is goal-driven (starts with query).', badge: 'Inference Engine' }
    );
    return points;
  }

  // Internet of Things (IoT)
  if (sLower.includes('internet of things') || sLower.includes('iot')) {
    points.push(
      { title: 'MQTT Publish/Subscribe Protocol', detail: 'Lightweight binary transport over TCP. Uses topic hierarchy (e.g. sensor/temp/zone1) and minimal 2-byte header footprint.', badge: 'Protocol' },
      { title: 'MQTT QoS Levels', detail: 'QoS 0: At most once (no retry); QoS 1: At least once (PUBACK required); QoS 2: Exactly once (4-step handshake).', badge: 'Quality of Service' },
      { title: 'CoAP Architecture', detail: 'Constrained Application Protocol runs over UDP with 4-byte header, supporting RESTful GET/POST/PUT/DELETE for low-power nodes.', badge: 'CoAP vs HTTP' },
      { title: 'Edge Computing Role in IoT', detail: 'Processes real-time anomaly detection and noise filtering locally on gateways, reducing cloud bandwidth consumption and latency.', badge: 'Architecture' }
    );
    return points;
  }

  // ==========================================
  // 3. SUBTOPIC-DRIVEN EXTRACTION (IF PRESENT)
  // ==========================================
  if (subtopics && subtopics.length > 0) {
    const badges = ['Exam Core', 'High Yield', 'Key Principle', 'Formulation', 'Design Rule', 'Analysis'];
    subtopics.slice(0, 5).forEach((st, idx) => {
      const cleanSub = st.title.replace(/\[\d+L\]/g, '').trim();
      points.push({
        title: cleanSub.length > 38 ? cleanSub.slice(0, 36) + '...' : cleanSub,
        detail: `Critical exam topic in ${subjectName}: Focus on theoretical foundations, standard derivations, block diagrams, and analytical formulations.`,
        badge: badges[idx % badges.length],
      });
    });
  }

  // ==========================================
  // 4. GUARANTEE MINIMUM 4 HIGH-YIELD POINTS
  // ==========================================
  const fallbackRules = [
    { title: `${topicTitle} Fundamental Definition`, detail: `Core syllabus definition, historical motivations, and foundational axioms for ${topicTitle} in ${subjectName}.`, badge: 'Definition' },
    { title: 'Theoretical Bounds & Derivations', detail: `Formal mathematical equations, governing bounds, and primary examination derivations for ${topicTitle}.`, badge: 'Mathematical Bound' },
    { title: 'Standard Engineering Trade-Offs', detail: `Speed vs memory overhead, operational complexity, hardware feasibility, and implementation trade-offs.`, badge: 'Design Trade-off' },
    { title: 'High-Yield Examination Questions', detail: `Frequently tested university exam questions, 10-mark descriptive problems, and past-year paper trends.`, badge: 'Exam Favorite' },
  ];

  while (points.length < 4) {
    points.push(fallbackRules[points.length]);
  }

  return points;
}

// Automatically enrich all static DSA topics so every single topic has >= 4 authentic keypoints!
DSA_TOPICS.forEach((topic) => {
  if (!topic.keyPoints || topic.keyPoints.length < 4) {
    topic.keyPoints = generateKeyPointsForTopic(
      'Data Structures and Algorithms',
      topic.shortTitle || topic.fullTitle,
      topic.notes?.map((n) => ({ title: n.title })) || []
    );
  }
});

export const SUBJECT_TOPICS_CATALOG: Record<string, TopicData[]> = {
  'Data structure and Algorithms': DSA_TOPICS,
  'Data Structures and Algorithms': DSA_TOPICS,
  'Computer Architecture': CA_TOPICS,
  'Operating Systems': OS_TOPICS,
};

// Convert any preset subject from subjectPresets.ts into genuine TopicData
function convertChaptersToTopics(subjectName: string, chapters: ChapterItem[]): TopicData[] {
  return chapters.map((ch, chIdx) => {
    const rawTitle = ch.title.replace(/\[\d+L\]/g, '').trim();
    const subtopics = ch.topics || [];
    const colors: ('red' | 'blue' | 'purple' | 'green' | 'amber')[] = ['red', 'blue', 'purple', 'green', 'amber'];

    const notes: NoteItem[] = subtopics.map((st, sIdx) => {
      const cleanSubTitle = st.title.replace(/\[\d+L\]/g, '').trim();
      return {
        id: `${ch.id}-n-${sIdx + 1}`,
        title: `${sIdx + 1}. ${cleanSubTitle}`,
        description: `Comprehensive analysis, key derivations, and practical exam implementations for ${cleanSubTitle}.`,
        pages: 8 + ((sIdx * 3) % 9),
        format: 'PDF',
        color: colors[sIdx % colors.length],
        status: (st.status === 'in-progress' ? 'in_progress' : st.status === 'completed' ? 'completed' : 'not_started') as NoteItem['status'],
        contentMarkdown: `### ${cleanSubTitle}

#### Overview & Fundamentals
In **${subjectName}**, understanding **${cleanSubTitle}** is critical for both theoretical exam papers and practical implementations.

\`\`\`
${subjectName} Module Architecture
└── ${rawTitle}
    └── ${cleanSubTitle}
\`\`\`

#### Key Concepts & Working Principles
- **Theoretical Foundations**: Core definitions, architectural bounds, and mathematical formulations.
- **Implementation Mechanics**: Step-by-step algorithms, protocols, and standard workflow patterns.
- **Design Trade-offs**: Speed vs memory overhead, hardware constraints, and optimization strategies.

#### Standard Examination Questions
1. Define and explain **${cleanSubTitle}** with suitable diagrams and real-world examples.
2. What are the key performance trade-offs associated with this concept in university examinations?
3. State and derive the relevant mathematical formulations or complexity bounds where applicable.`,
      };
    });

    return {
      id: ch.id || `topic-${chIdx + 1}`,
      number: ch.number || chIdx + 1,
      shortTitle: rawTitle.length > 36 ? rawTitle.slice(0, 34) + '...' : rawTitle,
      fullTitle: `${subjectName} — Chapter ${ch.number || chIdx + 1}: ${rawTitle}`,
      description: `Core concepts, theorems, architectural designs and exam notes for ${rawTitle}.`,
      notesCount: notes.length || 3,
      notes: notes.length > 0 ? notes : [
        {
          id: `${ch.id}-n-1`,
          title: `1. Foundations of ${rawTitle}`,
          description: `Key principles, definitions, and exam questions for ${rawTitle}.`,
          pages: 12,
          format: 'PDF',
          color: 'red',
          status: 'not_started',
          contentMarkdown: `### ${rawTitle}\nComprehensive study notes covering foundational theory and examination patterns for ${subjectName}.`,
        },
      ],
      summary: [
        `Master the foundational concepts of ${rawTitle} to ensure strong baseline marks.`,
        `Focus on standard university derivations, block diagrams, and algorithmic steps.`,
        `Pay careful attention to time and space performance trade-offs.`,
      ],
      keyPoints: generateKeyPointsForTopic(subjectName, rawTitle, subtopics),
      mindMap: [
        { title: rawTitle, children: subtopics.slice(0, 4).map((s) => s.title.replace(/\[\d+L\]/g, '').trim()) },
      ],
      practiceQs: [
        {
          question: `Explain the fundamental working and architecture of ${rawTitle} in ${subjectName}.`,
          marks: 10,
          year: '2024',
          difficulty: 'Medium',
          answerSnippet: `Provide structured answer with block diagrams, mathematical relations, and core characteristics.`,
        },
      ],
      videos: [
        {
          title: `${rawTitle} Lecture`,
          educator: 'Gate Smashers',
          duration: '22:00',
          url: `https://www.youtube.com/results?search_query=gate+smashers+${encodeURIComponent(rawTitle)}`,
        },
      ],
    };
  });
}

/**
 * Returns ONLY the genuine syllabus topics and notes for the selected subject.
 * Guaranteed to NEVER leak DSA topics into other subjects!
 */
export function getTopicsForSubject(subjectName: string): TopicData[] {
  if (!subjectName || !subjectName.trim()) {
    return DSA_TOPICS;
  }

  const clean = subjectName.trim().toLowerCase();

  const resolveTopics = (): TopicData[] => {
    // 1. Direct Catalog Match
    for (const [key, topics] of Object.entries(SUBJECT_TOPICS_CATALOG)) {
      if (key.toLowerCase() === clean) {
        return topics;
      }
    }

    // 2. DSA Match
    if (clean.includes('data structure') || clean === 'dsa') {
      return DSA_TOPICS;
    }

    // 3. Computer Architecture Match
    if (
      clean === 'computer architecture' ||
      (clean.includes('architecture') && !clean.includes('software')) ||
      (clean.includes('computer org') && !clean.includes('digital logic'))
    ) {
      return CA_TOPICS;
    }

    // 4. Operating Systems Match
    if (clean.includes('operating system') || clean === 'os') {
      return OS_TOPICS;
    }

    // 5. Look in SUBJECT_PRESETS
    for (const [key, chapters] of Object.entries(SUBJECT_PRESETS)) {
      const kClean = key.toLowerCase();
      if (kClean === clean || clean.includes(kClean) || kClean.includes(clean)) {
        const converted = convertChaptersToTopics(key, chapters);
        if (converted.length > 0) return converted;
      }
    }

    // 6. Modular curriculum generated specifically for this subject
    return [
      {
        id: `mod-1-${clean.slice(0, 4)}`,
        number: 1,
        shortTitle: 'Foundations & Core Principles',
        fullTitle: `${subjectName} — Unit 1: Foundations & Core Principles`,
        description: `Basic terminology, axiomatic foundations, and introductory theorems for ${subjectName}.`,
        notesCount: 3,
        notes: [
          {
            id: `mod-1-n1`,
            title: `1. Introduction to ${subjectName}`,
            description: `Core principles, definitions, and exam questions for ${subjectName}.`,
            pages: 12,
            format: 'PDF',
            color: 'red',
            status: 'not_started',
            contentMarkdown: `### 1. Introduction to ${subjectName}\nFoundational syllabus concepts, definitions, and practical motivations.`,
          },
          {
            id: `mod-1-n2`,
            title: `2. Working Methodologies & Standards`,
            description: `Key paradigms, workflows, and theoretical representations in ${subjectName}.`,
            pages: 10,
            format: 'PDF',
            color: 'blue',
            status: 'not_started',
            contentMarkdown: `### 2. Working Methodologies\nStandard methodologies, architectures, and design rules.`,
          },
        ],
        summary: [`Understand foundational principles of ${subjectName} to secure core marks.`],
        keyPoints: generateKeyPointsForTopic(subjectName, 'Foundations & Core Principles', [
          { title: `1. Introduction to ${subjectName}` },
          { title: `2. Working Methodologies & Standards` },
        ]),
        mindMap: [{ title: subjectName, children: ['Foundations', 'Methodologies', 'Applications'] }],
        practiceQs: [
          {
            question: `Explain the fundamental concepts and importance of ${subjectName}.`,
            marks: 10,
            year: '2024',
            difficulty: 'Medium',
            answerSnippet: `Discuss core definitions, architectural patterns, and real-world applications.`,
          },
        ],
        videos: [
          {
            title: `${subjectName} Overview`,
            educator: 'Gate Smashers',
            duration: '20:00',
            url: `https://www.youtube.com/results?search_query=gate+smashers+${encodeURIComponent(subjectName)}`,
          },
        ],
      },
      {
        id: `mod-2-${clean.slice(0, 4)}`,
        number: 2,
        shortTitle: 'Core Architectures & Models',
        fullTitle: `${subjectName} — Unit 2: Core Architectures & Models`,
        description: `Structural analysis, algorithmic methods, and analytical modeling in ${subjectName}.`,
        notesCount: 3,
        notes: [
          {
            id: `mod-2-n1`,
            title: `1. Structural Frameworks in ${subjectName}`,
            description: `Deep dive into architectural components and modeling equations.`,
            pages: 14,
            format: 'PDF',
            color: 'purple',
            status: 'not_started',
            contentMarkdown: `### Structural Frameworks\nComprehensive model breakdown for university examinations.`,
          },
        ],
        summary: [`Master the models and architectures in ${subjectName}.`],
        keyPoints: generateKeyPointsForTopic(subjectName, 'Core Architectures & Models', [
          { title: `1. Structural Frameworks in ${subjectName}` },
        ]),
        mindMap: [{ title: 'Architecture', children: ['Structural Models', 'Equations', 'Trade-offs'] }],
        practiceQs: [
          {
            question: `Describe the core architectural models used in ${subjectName}.`,
            marks: 10,
            year: '2023',
            difficulty: 'Medium',
            answerSnippet: `Provide block diagrams and state equations.`,
          },
        ],
        videos: [
          {
            title: `${subjectName} Architecture`,
            educator: 'Neso Academy',
            duration: '25:00',
            url: `https://www.youtube.com/results?search_query=neso+academy+${encodeURIComponent(subjectName)}`,
          },
        ],
      },
      {
        id: `mod-3-${clean.slice(0, 4)}`,
        number: 3,
        shortTitle: 'Advanced Implementations & Applications',
        fullTitle: `${subjectName} — Unit 3: Advanced Implementations & Applications`,
        description: `Industrial applications, high-yield examination problems, and recent trends.`,
        notesCount: 3,
        notes: [
          {
            id: `mod-3-n1`,
            title: `1. Advanced Problem Sets & Exam Questions`,
            description: `Analysis of previous year questions and case studies.`,
            pages: 11,
            format: 'PDF',
            color: 'green',
            status: 'not_started',
            contentMarkdown: `### Advanced Problem Sets\nFrequently tested problems and design scenarios in ${subjectName}.`,
          },
        ],
        summary: [`Solve past paper problems to maximize GPA.`],
        keyPoints: generateKeyPointsForTopic(subjectName, 'Advanced Implementations & Applications', [
          { title: `1. Advanced Problem Sets & Exam Questions` },
        ]),
        mindMap: [{ title: 'Applications', children: ['Case Studies', 'Exam Questions', 'Future Trends'] }],
        practiceQs: [
          {
            question: `Discuss emerging applications and practical challenges in ${subjectName}.`,
            marks: 8,
            year: '2024',
            difficulty: 'Hard',
            answerSnippet: `Highlight real-world implementations, scalability challenges, and modern solutions.`,
          },
        ],
        videos: [
          {
            title: `${subjectName} Advanced Topics`,
            educator: 'Abdul Bari',
            duration: '30:00',
            url: `https://www.youtube.com/results?search_query=abdul+bari+${encodeURIComponent(subjectName)}`,
          },
        ],
      },
    ];
  };

  const rawTopics = resolveTopics();

  // Guaranteed: Every topic in every subject in every semester has at least 4 high-yield key points!
  return rawTopics.map((topic) => {
    if (!topic.keyPoints || topic.keyPoints.length < 4) {
      return {
        ...topic,
        keyPoints: generateKeyPointsForTopic(
          subjectName,
          topic.shortTitle || topic.fullTitle,
          topic.notes?.map((n) => ({ title: n.title })) || []
        ),
      };
    }
    return topic;
  });
}

