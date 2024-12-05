#include <iostream>

using namespace std;

int maxBooks(int a[], int n,int t){
    int l=0 , r=n, result =0;

    while(l<=r){
        int mid=(l+r)/2;
        int totalTime =0 , j=0;
        bool isRead=false;

        for(int i=0; i<n; i++){
            totalTime+= a[i];

            if(i-j+1 > mid){
                totalTime -= a[j++];
            }
            if(i-j+1 == mid && totalTime <= t){
                isRead =true;
                break;
            }

        }

        if(isRead){
            result = mid;
            l = mid+1;
        }
        else{
            r = mid-1;
        }
    }

    return result;
}

int main()
{
    int n,t;
    cin>>n>>t;

    int a[n];
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<maxBooks(a,n,t);
    return 0;
}
