function solution(array, n) {
       let data = array.sort();
        let near = 0;
        let target = n;
        let abs = 0;
        let arr = 0;
        let min = 100;

        for (var i = 0; i < data.length; i++) {
          abs = data[i] - n < 0 ? -(data[i] - target) : data[i] - n;

          if (abs < min) {
            min = abs;
            near = data[i];
          }
        }

      return near;
}