import java.util.*;

class Main {

  static int[] dx = { 0, 0, 1, -1 }; // 동 서 남 북 순서
  static int[] dy = { 1, -1, 0, 0 };
  static double[] percent;
  static boolean[][] visited;
  static double result;

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    percent = new double[4];
    for (int i = 0; i < 4; i++) {
      percent[i] = sc.nextInt() * 0.01;
    }

    visited = new boolean[30][30]; // 시작점을 15, 15로 잡기 위함.
    result = 0;
    dfs(15, 15, 0, n, 1);
    System.out.println(result);
    sc.close();
  }

  public static void dfs(int x, int y, int idx, int n, double total) {
    if (idx == n) {
      result += total;
      return;
    }

    visited[x][y] = true;
    for (int i = 0; i < 4; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < 30 && ny < 30) {
        if (visited[nx][ny] == false) {
          visited[nx][ny] = true;
          dfs(nx, ny, idx + 1, n, total * percent[i]);
          visited[nx][ny] = false;
        }
      }
    }
  }
}
