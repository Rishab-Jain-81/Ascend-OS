## Sprint 4

### Added
- Introduced custom `useDashboard` hook.
- Added task completion state management.
- Added progress calculation.
- Added localStorage persistence layer.
- Created dashboard storage service.

### Changed
- Separated business logic from UI.
- Reduced prop drilling.

---

## Sprint 5

### Added
- Theme Context
- Theme Provider
- useTheme custom hook
- Theme persistence using localStorage
- Global theme management

### Changed
- Navbar now uses Context instead of direct DOM manipulation.
- Theme is applied globally through Provider.

---

## Sprint 6

### Added
- Checklist component
- ChecklistItem component
- Completed task counter
- Empty state for task list

### Changed
- Refactored TasksCard into smaller reusable components.
- Moved task rendering logic into Checklist.
- Moved individual task rendering into ChecklistItem.