# Advanced Task Manager App

A modern task management application built with React for assignment demonstration purposes.

## Assignment Overview

This project demonstrates proficiency in advanced React concepts, custom hooks, Context API, performance optimization, and modern CSS techniques.

## Features Implemented

### Basic Features
- Add tasks with validation
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Completed, Pending)
- Persist tasks using Local Storage

### React Challenges
- **Custom Hooks**: `useLocalStorage` hook for managing localStorage operations
- **Context API**: Global state management without prop drilling
- **Performance Optimization**: 
  - `React.memo` for component memoization
  - `useCallback` for function memoization
  - `useMemo` for computed values
- **Form Validation**: Prevents empty tasks and enforces minimum character length

### CSS Challenges
- **Theming**: Dark Mode / Light Mode toggle with smooth transitions
- **Animations**: CSS transitions for adding/removing tasks, fade-in effects, slide animations
- **Responsive Design**: Mobile-first approach with breakpoints
- **Drag-and-Drop**: Native HTML5 drag-and-drop for task reordering

## Technical Implementation

### Custom Hook: `useLocalStorage`
```javascript
const useLocalStorage = (key, initialValue) => {
  // Handles reading from and writing to localStorage
  // Includes error handling and automatic serialization
}
```

### Context API Structure
```javascript
TaskContext - Provides global state
  ├── tasks (array)
  ├── theme (string)
  ├── filter (string)
  ├── addTask()
  ├── toggleTask()
  ├── deleteTask()
  └── toggleTheme()
```

### Performance Optimization
- All components wrapped with `React.memo`
- Event handlers memoized with `useCallback`
- Filtered tasks and statistics computed with `useMemo`

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Usage

1. **Add Task**: Enter text (min 3 characters) and click "Add" or press Enter
2. **Complete Task**: Click the circle icon to toggle completion
3. **Delete Task**: Click the trash icon to remove
4. **Filter Tasks**: Use filter buttons to view All/Pending/Completed
5. **Reorder Tasks**: Drag and drop tasks to reorder
6. **Toggle Theme**: Click sun/moon icon to switch themes

## Key Technologies

- React 18.x
- React Hooks (useState, useCallback, useMemo, useContext)
- Context API
- Local Storage API
- Lucide React (icons)
- CSS3 (Animations, Flexbox, Grid)

## Assignment Requirements Met

✅ All basic features implemented  
✅ Custom `useLocalStorage` hook created  
✅ Context API implemented for state management  
✅ Performance optimizations applied throughout  
✅ Form validation with error handling  
✅ Dark/Light theme toggle functional  
✅ Smooth CSS animations implemented  
✅ Fully responsive design  
✅ Drag-and-drop functionality working  

---