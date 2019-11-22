module.exports = class StringBalancer {
    __isBalanced(string) {
        let stack = [];

        string.split('').map(char => {
            if (char === '<')
                stack = [...stack, char];

            if (stack.indexOf('<') !== -1 && char === '>')
                stack.pop();
            else if (stack.length < 1 && char === '>')
                stack = [...stack, char];
        });

        return stack.length === 0;
    }
};
