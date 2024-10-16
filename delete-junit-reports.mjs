// delete-junit-reports.mjs
import { rimraf } from 'rimraf';
import { join } from 'path';


// Construct the path to the reports directory
const reportsPath = join(process.cwd(), 'cypress', 'reports', 'junit');

// Delete the contents of the directory
rimraf(reportsPath)
    .then(() => {
        console.log('JUnit reports deleted successfully.');
        process.exit(0);
    })
    .catch((err) => {
        console.error(`Error deleting JUnit reports: ${err.message}`);
        process.exit(1);
    });