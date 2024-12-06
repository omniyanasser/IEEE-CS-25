#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

long long numOfPairs(const vector<int>& a, int l, int r){

    long long counter=0;


    for(int i=0; i< a.size()-1; i++){
        int left= l-a[i];
        int right= r-a[i] ;

        int lower = lower_bound(a.begin() + i + 1, a.end(), left) - a.begin();
         int upper = upper_bound(a.begin() + i + 1, a.end(), right) - a.begin() - 1;

        if(lower <= upper){
            counter += (upper-lower+1);
        }

    }
    return counter;
}

int main()
{
    int t;
    cin>>t;

    while(t--){
        int n,l,r;
        cin>>n>>l>>r;

        vector<int>a(n);
        for(int i=0; i<n; i++){
            cin>>a[i];
        }
        sort(a.begin() , a.end());
        cout<< numOfPairs(a,l,r)<<endl;
    }
    return 0;
}
