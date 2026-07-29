# ASCEND OS Architecture

## Overview

ASCEND OS follows a feature-based architecture to improve scalability, maintainability, and separation of concerns.

## Routing

React Router is configured using nested routes.


## Navigation

Navigation is configuration-driven.

The sidebar renders links from `src/config/navigation.js` instead of hardcoding navigation items.

This allows the same configuration to be reused in future features such as:

- Mobile Navigation
- Command Palette
- Breadcrumbs
- Permission-based routing

## Current Architecture

- React
- Vite
- Tailwind CSS
- React Router
- Feature-based architecture

## Goal

Build a production-grade personal engineering dashboard following professional software engineering practices.