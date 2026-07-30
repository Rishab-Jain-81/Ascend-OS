# Architecture Decision Records

---

## ADR-001

### Title

Adopt Feature-Based Folder Structure

### Status

Accepted

### Context

The application will continue to grow with multiple independent modules.

### Decision

Organize code by feature instead of file type.

### Consequences

- Better scalability
- Easier maintenance
- Clear ownership of features

---

## ADR-002

### Title

Use Layout Routes with React Router

### Status

Accepted

### Context

Every page shares the same Navbar and Sidebar.

### Decision

Use `AppLayout` with React Router's `Outlet` to render page-specific content inside a shared layout.

### Consequences

- Eliminates duplicated layout code
- Centralizes shared UI
- Simplifies future expansion

---

## ADR-003

### Title

Adopt Composition Pattern for Dashboard Cards

### Status

Accepted

### Context

The dashboard contains multiple sections that share the same visual container while displaying different content.

### Decision

Create a reusable Card component that renders arbitrary content using React's children prop.

### Consequences

- Promotes component reuse
- Reduces duplicated styling
- Keeps Card independent of business logic
- Allows future dashboard sections to be added with minimal effort

---

## ADR-004

### Title

Separate Data From Presentation

### Status

Accepted

### Context

Dashboard data will eventually come from localStorage, APIs and databases.

### Decision

Store dashboard information in a dedicated data module instead of hardcoding values inside JSX.

### Consequences

- Cleaner UI
- Better scalability
- Easier backend integration