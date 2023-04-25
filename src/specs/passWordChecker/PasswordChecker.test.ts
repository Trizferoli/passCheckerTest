import { PasswordErrors, passChecker } from "../../app/passWordChecker/PasswordChecker"

describe('test', () => {
    let sut: passChecker;

    beforeEach(() => {
        sut = new passChecker()
    });
    it('password with less than 8 characters is invalid', () => {
        const actual = sut.checkPassword('12345A7');

        expect(actual.valid).toBeFalsy();
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('should pass with at least 8 characters', () => {
        const actual = sut.checkPassword('12345678A');

        expect(actual).toBeTruthy();
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('should pass with at least 1 upperCase Letter', () => {
        const actual = sut.checkPassword('1234aAcd');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);

    })

    it('should fail without 1 upperCase Letter', () => {
        const actual = sut.checkPassword('1234adddcd');
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
        expect(actual.valid).toBe(false);

    });

    it('Should fail if admin password has no number ', () => {
        const actual = sut.checkAdminPassword('abcAbcd');
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
        expect(actual.valid).toBe(false);

    });

    it('Should pass if admin password has number ', () => {
        const actual = sut.checkAdminPassword('abcAbcd1');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);

    });

})