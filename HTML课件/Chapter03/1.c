#include"sequlist.h"
void reverse(sequence_list *L)
{
	int i;
	int ncu;
	for(i=0;i<=L->size/2;i++)
	{
		ncu=L->a[i];
		L->a[i]=L->a[L->size-1-i];
		L->a[L->size-1-i]=ncu;
	}
}
int main()
{
	sequence_list L;
	input(&L);
	print(&L);
	reverse(&L);
	print(&L);
}
