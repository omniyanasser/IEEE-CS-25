#include <iostream>

using namespace std;

int main()
{
    int n;
    cin>>n;

    int time[n];
    for(int i=0; i<n; i++){
        cin>>time[i];
    }
    int left = 0 , right= n-1;
    int alice=0 , bob=0;
    int a=0 , b=0;

    while(left <= right){
        if(alice <= bob){
        alice+=time[left++];
        ++a;
    }

      else{
        bob+=time[right--];
        ++b;
      }
    }

    cout<<a<<" "<<b<<endl;


    return 0;
}
