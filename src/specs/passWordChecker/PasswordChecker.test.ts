import { passChecker } from "../../app/passWordChecker/PasswordChecker"

describe('test', () => {
    let sut: passChecker;

    beforeEach(() => {
        sut = new passChecker()
    });
    it('password with less than 8 characters is invalid', () => {
        const actual = sut.checkPassword('12345A7');

        expect(actual).toBeFalsy();
    });

    it('should pass with at least 8 characters', () => {
        const actual = sut.checkPassword('12345678A');

        expect(actual).toBeTruthy();
    });

    it('should pass with at least 1 upperCase Letter', () => {
        const actual = sut.checkPassword('1234aAcd');
        expect(actual).toBe(true)

    })

    it('should fail without 1 upperCase Letter', () => {
        const actual = sut.checkPassword('1234adddcd');
        expect(actual).toBe(false)

    })
})