import java.io.*;
import java.util.*;

class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int N = Integer.parseInt(st.nextToken());
    int Q = Integer.parseInt(st.nextToken());
    StringBuilder sb = new StringBuilder();
    List<Integer> list = new ArrayList<Integer>();
    for (int i = 1; i <= N; i++) {
      int time = Integer.parseInt(br.readLine());
      for (int j = 0; j < time; j++) {
        list.add(i);
      }
    }

    for (int i = 0; i < Q; i++) {
      int num = Integer.parseInt(br.readLine());
      sb.append(list.get(num)).append("\n");
    }
    System.out.println(sb);
  }
}
