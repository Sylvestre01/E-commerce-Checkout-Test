export default class GenerateData {

    generateRandomCode(length) {
        if (typeof length !== 'number' || length < 1) {
            throw new Error('Length must be a positive integer');
        }
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomCode = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCode += characters[randomIndex];
        }
        return randomCode;
    }

    generateRandomDigitCode(length) {
        if (typeof length !== 'number' || length < 1) {
            throw new Error('Length must be a positive integer');
        }
        const characters = '0123456789';
        let randomCode = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCode += characters[randomIndex];
        }
        return randomCode;
    }
}