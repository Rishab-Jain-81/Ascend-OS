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