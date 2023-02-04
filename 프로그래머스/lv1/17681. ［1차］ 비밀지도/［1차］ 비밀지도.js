        function solution(n, arr1, arr2) {
                const answer = [];
                const arr1ten = [];
                const arr2ten = [];

                for (let i = 0; i < arr1.length; i++) {
                    arr1ten.push(arr1[i].toString(2));
                    arr2ten.push(arr2[i].toString(2));
                    if (arr1ten[i].length < n) {
                        arr1ten[i] = '0'.repeat(n - arr1ten[i].length) + arr1ten[i];
                    }
                    if (arr2ten[i].length < n) {
                        arr2ten[i] = '0'.repeat(n - arr2ten[i].length) + arr2ten[i];
                    }
                }

                console.log(arr1ten, arr2ten);

                for (let i = 0; i < n; i++) {
                    let board = '';
                    for (let j = 0; j < n; j++) {
                        if (Number(arr1ten[i][j]) || Number(arr2ten[i][j])) {
                            board += '#';
                        } else {
                            board += ' ';
                        }
                    }
                    answer.push(board);
                }

                return answer;
            }