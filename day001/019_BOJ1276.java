import java.io.*;
import java.util.*;

class Main {
  static int N;
  static Bridge b[];

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    N = Integer.parseInt(br.readLine());
    b = new Bridge[N];
    for (int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      b[i] = new Bridge(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()),
          Integer.parseInt(st.nextToken()));
    }
    Arrays.sort(b);
    int ans = 0;
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < 2; j++) {
        ans += b[i].y;
        int x = b[i].x[j] - j;
        for (int k = i - 1; k >= 0; k--) {
          if (b[k].x[0] <= x && x < b[k].x[1]) {
            ans -= b[k].y;
            break;
          }
        }
      }
    }
    System.out.println(ans);
  }

  static class Bridge implements Comparable<Bridge> {
    int x[], y;

    Bridge(int y, int x1, int x2) {
      this.y = y;
      x = new int[2];
      x[0] = x1;
      x[1] = x2;
    }

    @Override
    public int compareTo(Bridge o) {
      return y - o.y;
    }
  }
}
