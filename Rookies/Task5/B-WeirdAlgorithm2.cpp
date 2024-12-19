#include <iostream>

using namespace std;
long long rec(int n){

  cout<<n<<" ";

  if(n==1){
    return n;
  }
  if(n%2==0){
    return n=rec(n/2);
  }

  return n= rec(n*3 +1);

}

int main()
{
    long long n;
    cin>>n;
    rec(n);

    return 0;
}
