function solution(s, n) {
                let arr = [];
                let str = s.split(' ');
                var blank_pattern = /[\s]/g;
                let answer = '';
                if (blank_pattern.test(s) == true) {
                    for (let i = 0; i < s.length; i++) {
                        if (s[i] !== s[i].toUpperCase()) {
                            if (s.charCodeAt(i) + n >= 123) {
                                arr.push(s[i].charCodeAt(0) + n - 25 - 1);
                            } else {
                                arr.push(s[i].charCodeAt(0) + n);
                            }
                        } else {
                            if (s.charCodeAt(i) + n >= 91) {
                                arr.push(s[i].charCodeAt(0) + n - 25 - 1);
                            } else {
                                arr.push(s[i].charCodeAt(0) + n);
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < s.length; i++) {
                        if (s[i] !== s[i].toUpperCase()) {
                            if (s.charCodeAt(i) + n >= 123) {
                                arr.push(s.charCodeAt(i) + n - 25 - 1);
                            } else {
                                arr.push(s.charCodeAt(i) + n);
                            }
                        } else {
                            if (s.charCodeAt(i) + n >= 91) {
                                arr.push(s.charCodeAt(i) + n - 25 - 1);
                            } else {
                                arr.push(s.charCodeAt(i) + n);
                            }
                        }
                    }
                }

                arr.forEach((a, i) => {
                    if (a >= 33 && a <= 57) {
                        arr[i] = 32;
                    }
                });

                arr.forEach((a, i) => {
                    answer += String.fromCharCode(a);
                });

                return answer;
            }
