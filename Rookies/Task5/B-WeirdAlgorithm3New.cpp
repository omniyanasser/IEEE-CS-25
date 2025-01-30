#include <iostream>
#include <vector>
using namespace std;

vector<long long>memo(1000000,-1);

void rec(long long n){


 cout<<n<<" ";

  if(n==1){
    return;
  }
  if(n < 1000000 && memo[n]!= -1){
    return;
  }

  if(n%2==0){
    rec(n/2);
  }
  else{
    rec(n*3 +1);
  }

  if (n < 1000000) {
        memo[n] =(n % 2 == 0)? n / 2 : (n * 3 + 1);
    }

}

int main()
{
    long long n;
    cin>>n;
    rec(n);

    return 0;
}