function solution(before, after) {
 let letterb = [...before];
        let lettera = [...after];

        const equalsIgnoreOrder = (a, b) => {
          if (a.length !== b.length) return false;
          const uniqueValues = new Set([...a, ...b]);
          for (const v of uniqueValues) {
            const aCount = a.filter((e) => e === v).length;
            const bCount = b.filter((e) => e === v).length;
            if (aCount !== bCount) return false;
          }
          return true;
        };

        if (equalsIgnoreOrder(letterb, lettera)) {
          return 1;
        } else {
          return 0;
        }
}