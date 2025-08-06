# Memex Project: Next Steps

This document outlines a phased development plan to build the Memex application as envisioned in the [architectural-outline.md](docs/architectural-outline.md). The project currently consists of a new React Native application, and the following steps will guide the implementation of the backend services and the connection between the frontend and backend.

---

### **Phase 1: Foundational Setup & Core Backend**

**Goal:** Establish the project structure, set up the development environment, and build the initial version of the Go backend service.

1.  **Setup Go Backend Monorepo:**
    *   Create a `backend/` directory in the root of the project.
    *   Inside `backend/`, initialize a Go module: `go mod init github.com/sheldoncross/memex/backend`.

2.  **Define Core API Contract:**
    *   Start with a simple REST API for the first features. Define an OpenAPI (Swagger) specification for the initial endpoints.
    *   **Key initial endpoint:** `POST /api/v1/nodes` for ingesting new notes.

3.  **Implement Backend Server & LLM Service Wrapper:**
    *   In the `backend/` directory, set up a basic HTTP server using a standard library or a lightweight framework like Gin.
    *   Create an `llm/` package that acts as a wrapper for an external LLM provider (e.g., Gemini or OpenAI API). This service will be responsible for generating vector embeddings from text.

4.  **Select and Integrate a Vector Database:**
    *   As per the architecture, a vector database is essential. For rapid development, start with a managed service like **Pinecone** or a self-hostable option like **Weaviate** or **Qdrant**.
    *   Create a `database/` package in the Go backend that handles the connection and data access logic (e.g., `StoreNode(text, vector)`).

5.  **Containerize the Development Environment:**
    *   Create a `docker-compose.yml` file in the project root to manage the Go backend and the chosen database service. This ensures a consistent and reproducible development environment for all contributors.

---

### **Phase 2: Implement First End-to-End Feature (Data Ingestion)**

**Goal:** Implement the "Ingesting Data" flow described in the architectural outline, creating the first fully functional feature.

1.  **Build the Data Ingestion Endpoint:**
    *   Implement the logic for the `POST /api/v1/nodes` endpoint in the Go backend.
    *   The handler should:
        1.  Receive text content from the request body.
        2.  Call the LLM service to generate a vector embedding for the text.
        3.  Call the database service to store the original text and its corresponding vector.

2.  **Develop UI for Note Creation:**
    *   In the React Native application (`App.tsx` to start), create a simple UI with:
        *   A `TextInput` for writing a new note.
        *   A "Save" `Button`.

3.  **Connect Frontend to Backend:**
    *   Create a service client in the React Native app (e.g., in `src/services/api.ts`) to handle HTTP requests to the Go backend.
    *   When the user presses "Save", the app should call the `POST /api/v1/nodes` endpoint with the note's content.
    *   Implement basic state management (e.g., using Zustand or Redux Toolkit) to handle loading and success/error states.

---

### **Phase 3: Implement Core Retrieval Features**

**Goal:** Enable users to retrieve and see connections between their notes, bringing the "memex" concept to life.

1.  **Implement Semantic Search:**
    *   **Backend:** Create a new endpoint: `GET /api/v1/search?q={query}`.
    *   This endpoint will take a search query, generate an embedding for it, and use the vector database to find and return the most semantically similar notes.
    *   **Frontend:** Add a search bar to the UI. As the user types, call the search endpoint and display the results.

2.  **Develop "Associative Trails":**
    *   **Backend:** Create an endpoint: `GET /api/v1/nodes/{nodeId}/related`.
    *   When a user views a single note, this endpoint will be called. It will use the note's vector to find similar items in the database.
    *   **Frontend:** When viewing a note, fetch and display a list of these related notes, forming the first version of an "associative trail."

3.  **Build the Main Notes View:**
    *   Create a new endpoint `GET /api/v1/nodes` to retrieve all notes.
    *   Develop the main screen of the app to display the list of all saved notes, allowing a user to tap on one to view its details and its associative trail.

---

### **Phase 4: Advanced Features & Refinement**

**Goal:** Enhance the core features with more advanced LLM capabilities and prepare for a wider audience.

1.  **Implement Natural Language Query:**
    *   As outlined in the architecture, enhance the search endpoint to accept complex natural language queries.
    *   The backend will pass the query to the LLM with a prompt engineered to deconstruct it into keywords and logical operators, which can then be used to perform more sophisticated searches against the database.

2.  **Integrate a Graph Database:**
    *   To manage explicit relationships, integrate a graph database like Neo4j or Dgraph.
    *   When creating associative trails, store the discovered links as edges in the graph. This allows for more permanent and complex relationship traversal than relying solely on vector similarity for every query.

3.  **On-Device LLM Integration:**
    *   Begin research and development into integrating a self-hosted or on-device model (e.g., using Ollama with Phi-3) for privacy-focused tasks like tagging or summarization, as outlined in the hybrid approach.

4.  **UI/UX Polish:**
    *   Refine the user interface. Consider a more visual way to represent the "associative trails," perhaps using a graph visualization library.
    *   Improve the overall user experience based on