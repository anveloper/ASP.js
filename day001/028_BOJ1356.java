import java.io.*;

class Main {
  public static void main(String args[]) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String str = br.readLine();
    char[] charArr = str.toCharArray();
    int len = str.length();

    int[] A = new int[len];
    int[] B = new int[len];
    for (int i = 0; i < len - 1; i++) {
      int j = len - 1 - i;

      if (i == 0) {
        A[i] = (int) (charArr[i] - '0');
        B[j] = (int) (charArr[j] - '0');
        continue;
      }

      A[i] = A[i - 1] * (int) (charArr[i] - '0');
      B[j] = B[j + 1] * (int) (charArr[j] - '0');
    }

    boolean check = false;
    for (int i = 0; i < len - 1; i++) {
      if (A[i] == B[i + 1]) {
        check = true;
        break;
      }
    }
    System.out.print(check ? "YES" : "NO");
  }
}