function solution(s, n) {
                let arr = [];
                let str = s.split(' ');
                var blank_pattern = /[\s]/g;
                let answer = '';
                if (blank_pattern.test(s) == true) { // 공백이 있을 경우,
                    for (let i = 0; i < s.length; i++) {
                        if (s[i] !== s[i].toUpperCase()) { //대문자인 경우
                            if (s.charCodeAt(i) + n >= 123) { // 아스키코드가 123이 넘어가는 경우
                                arr.push(s[i].charCodeAt(0) + n - 25 - 1);
                            } else { // 안넘어가는 경우
                                arr.push(s[i].charCodeAt(0) + n);
                            }
                        } else { // 소문자인 경우
                            if (s.charCodeAt(i) + n >= 91) {// 아스키코드가 91이 넘어가는 경우
                                arr.push(s[i].charCodeAt(0) + n - 25 - 1);
                            } else { // 안넘어가는 경우
                                arr.push(s[i].charCodeAt(0) + n);
                            }
                        }
                    }
                } else { // 공백이 없는 경우,
                    for (let i = 0; i < s.length; i++) {
                        if (s[i] !== s[i].toUpperCase()) { //대문자인 경우
                            if (s.charCodeAt(i) + n >= 123) { // 아스키코드가 123이 넘어가는 경우
                                arr.push(s.charCodeAt(i) + n - 25 - 1);
                            } else { // 안넘어가는 경우
                                arr.push(s.charCodeAt(i) + n);
                            }
                        } else { // 소문자인 경우
                            if (s.charCodeAt(i) + n >= 91) { // 아스키코드가 91이 넘어가는 경우
                                arr.push(s.charCodeAt(i) + n - 25 - 1);
                            } else { // 안넘어가는 경우
                                arr.push(s.charCodeAt(i) + n);
                            }
                        }
                    }
                }

                arr.forEach((a, i) => {
                    if (a >= 33 && a <= 57) { // arr 배열에 n만큼 더해진 공백(아스키코드: 32)을 다시 32로 변환.
                        arr[i] = 32;
                    }
                });

                arr.forEach((a, i) => { //문자열로 answer에 할당.
                    answer += String.fromCharCode(a);
                });

                return answer;
            }
