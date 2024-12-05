#include <iostream>

using namespace std;

long long totalLines(int v, int k){
    long long total_lines=0;
    long long current_v = v;

    while(current_v >0){
        total_lines+=current_v;
        current_v/=k;
    }

    return total_lines;

}

int main()
{
   int n,k;
   cin>>n>>k;

   int l=0, r=n , min_v=n;

   while(l<=r){
    int mid=(l+r)/2;
    long long lines = totalLines(mid,k);

    if(lines >= n){
        min_v = mid;
        r = mid-1;
    }
    else{
        l= mid+1;
    }
   }

   cout<<min_v<<endl;
    return 0;
}
