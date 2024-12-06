#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    cin>>n;

    int skill[n];
    for(int i=0; i<n; i++){
        cin>>skill[i];
    }

    sort(skill, skill+n);

    int left=0 , right=0;
    int counter=0;
    while(right <n){
        if((skill[right] - skill[left]) > 5){
            ++left;
        }
        else{
            counter = max(counter, (right-left+1));
            ++right;
        }
    }

    cout<<counter<<endl;
    return 0;
}
