# Body Part Selector

A React component that allows users to select human body parts and associated injuries. This project provides a user-friendly interface for selecting body parts and managing injury data.

## Installation

You can install the Body Part Selector component via npm:

```bash
npm install body-part-selector
```

## Usage

To use the Body Part Selector component in your React application, import it as follows:

```javascript
import React from 'react';
import BodyPartSelector from 'body-part-selector';

const App = () => {
  const handleInjuryChange = (injuries) => {
    console.log('Updated injuries:', injuries);
  };

  return (
    <div>
      <h1>Body Part Selector</h1>
      <BodyPartSelector onInjuriyChange={handleInjuryChange} />
    </div>
  );
};

export default App;
```

## Features

- Interactive body part selection
- Modal for adding and editing injuries
- Validation for required fields
- Display of added injuries in a table format

## Props

### `BodyPartSelector`

- **onInjuriyChange**: A function that is called when the list of injuries is updated. It receives the updated injuries array as an argument.

## Development

To contribute to the development of this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/M-Hassan-Malik/body-part-selector
cd body-part-selector
npm install
```

You can then start the development server:

```bash
npm start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Muhammad Hassan Sohail

### Contact Information

- **npm Repository**: [npm Profile](https://www.npmjs.com/~hassan-sohail)
- **GitHub**: [body-part-selector](https://github.com/M-Hassan-Malik)
- **LinkedIn Profile**: [Muhammad Hassan Sohail](https://www.linkedin.com/in/muhammad-hassan-sohail/)
- **Portfolio Website**: [www.muhammadhassansohail.com](https://codehassan.vercel.app/)