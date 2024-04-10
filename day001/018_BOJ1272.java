import java.io.*;
import java.util.*;

class Main { // best sol
  static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  static StringTokenizer st;

  final static int NOT_VISIT = -1;

  static int n, root;
  static int[] weight = new int[1001];
  static int[][] dp = new int[1001][1001];
  static boolean[] visit = new boolean[1001];
  @SuppressWarnings("unchecked")
  static ArrayList<Integer>[] adj = new ArrayList[1001];

  public static void main(String args[]) throws IOException {
    st = new StringTokenizer(br.readLine());
    n = Integer.parseInt(st.nextToken());
    root = Integer.parseInt(st.nextToken());
    st = new StringTokenizer(br.readLine());
    for (int i = 1; i <= n; i++) {
      adj[i] = new ArrayList<>();
      weight[i] = Integer.parseInt(st.nextToken());
    }
    for (int i = 0, u, v; i < n - 1; i++) {
      st = new StringTokenizer(br.readLine());
      u = Integer.parseInt(st.nextToken());
      v = Integer.parseInt(st.nextToken());
      adj[u].add(v);
      adj[v].add(u);
    }
    for (int i = 1; i <= n; i++)
      Arrays.fill(dp[i], NOT_VISIT);
    System.out.println(dfs(root, root));
  }

  static int dfs(final int cur, final int lastSp) {
    if (dp[cur][lastSp] != NOT_VISIT)
      return dp[cur][lastSp];

    int resNormal = weight[cur] - weight[lastSp];
    int resSp = weight[cur];

    visit[cur] = true;
    for (final int child : adj[cur]) {
      if (visit[child])
        continue;
      resSp += dfs(child, cur);
      if (cur != root)
        resNormal += dfs(child, lastSp);
    }
    visit[cur] = false;

    return dp[cur][lastSp] = (cur == root ? resSp : Math.min(resNormal, resSp));
  }
}