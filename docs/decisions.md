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

---

## ADR-005

### Title

Componentize Dashboard Feature

### Status

Accepted

### Context

DashboardPage was growing in size as more dashboard sections were added.

### Decision

Extract each dashboard section into its own component while keeping layout orchestration inside DashboardPage.

### Consequences

- Better readability
- Improved maintainability
- Easier feature expansion
- Clear component responsibilities

---

## ADR-006

## Tiltle

Dashboard state Management

## status

Accepted

## Decision

Moved dashboard state management into a custom hook.

### Reason

Keeps UI components focused on rendering while business logic lives inside hooks.

### Consequences

- Reusable
- Easier testing
- Better separation of concerns

---

## ADR-007

## Tiltle

Theme Management

## status

Accepted

## Decision

Implemented global theme management using React Context.

### Reason

The application theme is shared by multiple components.

Using Context avoids prop drilling and keeps theme management centralized.

### Consequenses

- Global access
- Reusable hook
- Easy persistence
- Scalable architecture

---