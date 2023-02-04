        function solution(n, arr1, arr2) {
                const answer = [];
                const arr1ten = [];
                const arr2ten = [];

                for (let i = 0; i < arr1.length; i++) {
                    arr1ten.push(arr1[i].toString(2));
                    arr2ten.push(arr2[i].toString(2)); // 10진수를 2진수로 전환
                    if (arr1ten[i].length < n) {
                        arr1ten[i] = '0'.repeat(n - arr1ten[i].length) + arr1ten[i];
                    }
                    if (arr2ten[i].length < n) {
                        arr2ten[i] = '0'.repeat(n - arr2ten[i].length) + arr2ten[i]; // 만약 2진수 전환 과정에서 n보다 작으면 부족한 만큼 0을 추가해준다.
                    }
                }


                   for (let i = 0; i < n; i++) {
                    let board = '';
                    for (let j = 0; j < n; j++) {
                        if (Number(arr1ten[i][j]) == 1 || Number(arr2ten[i][j]) == 1) { // 지도 2개의 겹치는 부분 중에 하나라도 1일 경우 '#'
                            board += '#';
                        } else { // 1이 아닐 경우(0일 경우) 공백을 넣어주었다.
                            board += ' ';
                        }
                    }
                    answer.push(board);
                }

                return answer;
            }