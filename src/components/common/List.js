import {FlatList} from 'react-native';
import PropsTypes from 'prop-types';


const List = ({data, RenderChildren, onRefresh}) => {
  
    const renderItem = ({ item }) => <RenderChildren item={item} />;

    return <FlatList
        data={data}
        onRefresh={onRefresh}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={false}
    />
}

List.prototype={
    data: PropsTypes.object,
    RenderChildren: PropsTypes.node,
    onRefresh:PropsTypes.func
}

export default List;