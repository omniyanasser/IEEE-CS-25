#include <iostream>

using namespace std;

long long fib(int n){
    if(n==0){
        return 0;
    }

    if(n==1){
        return 1;
    }

    return fib(n-1)+ fib(n-2);
}

int main() {

   long long n;
   cin>>n;

    cout<<fib(n)<<endl;
    return 0;
}
