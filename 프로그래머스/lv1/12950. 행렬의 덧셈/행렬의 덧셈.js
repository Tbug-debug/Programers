       function solution(arr1, arr2) {
                const answer = [];
                let count = 0;

                if (arr1[0].length === 1) {
                    for (let i = 0; i < arr1.length; i++) {
                        answer.push([arr1[i][0] + arr2[i][0]]);
                    }
                }

                if (arr1[0].length > 1) {
                    for (let i = 0; i < arr1.length; i++) {
                        let arr = [];
                        if (arr1[i].length > 2) {
                            for (let j = 0; j < arr1[i].length + count; j++) {
                                arr.push(arr1[i][j] + arr2[i][j]);
                            }
                        } else {
                            for (let j = 0; j < arr1.length; j++) {
                                arr.push(arr1[i][j] + arr2[i][j]);
                            }
                        }
                        answer.push(arr);
                    }
                }

                return answer;
            }