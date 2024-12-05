#include <iostream>

using namespace std;

int maxPoint(int points[], int n, int start, int d){
    int l = start+1 , r= n-1;

    while(l<= r){
        int mid=(l+r)/2;

        if(points[mid]- points[start] <= d){
            l = mid+1;
        }
        else{
            r = mid -1;
        }
    }

    return r;
}

int main()
{
    int n , d;
    cin>>n>>d;

    int points[n];
    for(int i=0; i<n; i++){
        cin>>points[i];
    }

    long long groups =0;

    for(int i=0; i< n-2; i++){
        int max_d = maxPoint(points,n,i,d);
        int counter = max_d - i;

        if(counter>= 2){
            groups += 1LL * counter * (counter - 1) / 2;
        }
    }

    cout<<groups<<endl;

    return 0;
}
