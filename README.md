# CRM Contact Application

**Live Demo**: [CRM Contact App](https://soft-cranachan-bc190c.netlify.app/)

## How to Run the App

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the App**:
   - Navigate to `http://localhost:3000` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Tech Stack Used

- **Frontend**: React.js
- **Build Tool**: Vite
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: Single CSS File (`App.css`)
- **Icons**: Custom SVGs

---

## Folder Structure

```
crm-contact/
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, fonts, and CSS
│   │   ├── css/          # Global styles
│   ├── components/       # React components
│   │   ├── common/       # Reusable components (Button, Input, etc.)
│   │   ├── contact/      # Contact-related components
│   │   ├── conversations/ # Conversation-related components
│   │   ├── notes/        # Notes-related components
│   ├── utils/            # Utility functions and configurations
│   │   ├── configs/      # JSON configurations (e.g., `helper.js`)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
├── vite.config.js        # Vite configuration
├── package.json          # Project metadata and dependencies
```

---

## How Each JSON Config is Used

### `helper.js`
- **Purpose**: Stores static data and configurations used across the app.
- **Contents**:
  - `schema`: Defines the structure of forms (e.g., fields for contact info).
  - `formdata`: Predefined data for forms.
  - `conversations`: Stores conversation data (email and WhatsApp messages).
  - `notes`: Stores user notes.

### `layout.json` (if applicable)
- **Purpose**: Defines the layout structure for dynamically rendering components.
- **Contents**: Specifies sections (e.g., `left`, `center`, `right`) and their associated components.

---


