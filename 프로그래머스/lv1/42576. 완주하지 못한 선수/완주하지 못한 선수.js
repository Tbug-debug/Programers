      function solution(participant, completion) {
                let par = participant.sort();
                let com = completion.sort();

                for (let i = 0; i < participant.length; i++) {
                    if (participant[i] !== completion[i]) {
                        return participant[i]
                    }
                }
            }